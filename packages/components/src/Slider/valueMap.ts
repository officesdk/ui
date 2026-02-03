/**
 * Value map utilities for piecewise linear mapping (non-linear slider)
 */

/**
 * Round to fixed decimal places to avoid floating point errors
 */
const toFixed = (num: number, precision: number = 10): number => {
  return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
};

export interface ValueMapPiece {
  /** Size of the piece (value range) */
  size: number;
  /** Step increment, defaults to 1 */
  step?: number;
  /** Visual size (relative), defaults to size/step */
  visualSize?: number;
}

export interface ValueMapPieceExtended extends Required<ValueMapPiece> {
  start: number;
  end: number;
  visualStart: number;
  visualEnd: number;
  stepStart: number;
  stepEnd: number;
}

export interface ValueMap {
  type: 'piecewise';
  /** Starting value */
  start: number;
  /** Array of pieces defining the mapping */
  pieces: ValueMapPiece[];
}

export interface ValueMapExtended {
  type: 'piecewise';
  size: number;
  start: number;
  end: number;
  visualSize: number;
  visualStart: number;
  visualEnd: number;
  stepStart: number;
  stepEnd: number;
  pieces: ValueMapPieceExtended[];
}

/**
 * Create a simple single-piece linear value map
 */
export const createSinglePiecewiseMap = (
  min: number,
  max: number,
  step: number
): ValueMap => {
  return {
    type: 'piecewise',
    start: min,
    pieces: [
      {
        size: max - min,
        step: step,
        visualSize: 100,
      },
    ],
  };
};

/**
 * Extend a ValueMap with computed properties for each piece
 */
export const extendValueMap = (valueMap: ValueMap): ValueMapExtended => {
  const piecesExt: ValueMapPieceExtended[] = [];

  valueMap.pieces.forEach((p) => {
    const start = piecesExt.length
      ? piecesExt[piecesExt.length - 1].end
      : valueMap.start;
    const end = start + p.size;
    const visualStart = piecesExt.length
      ? piecesExt[piecesExt.length - 1].visualEnd
      : 0;

    const step = p.step || 1;
    const visualSize = p.visualSize || p.size / step;
    const visualEnd = visualStart + visualSize;
    const stepStart = piecesExt.length
      ? piecesExt[piecesExt.length - 1].stepEnd
      : 0;
    const stepEnd = stepStart + Math.ceil(p.size / step);

    piecesExt.push({
      size: p.size,
      step,
      visualSize,
      start,
      end,
      visualStart,
      visualEnd,
      stepStart,
      stepEnd,
    });
  });

  const firstPiece = piecesExt[0];
  const lastPiece = piecesExt[piecesExt.length - 1];

  const start = firstPiece.start;
  const end = lastPiece.end;
  const size = end - start;

  const visualStart = firstPiece.visualStart;
  const visualEnd = lastPiece.visualEnd;
  const visualSize = visualEnd - visualStart;

  return {
    type: 'piecewise',
    size,
    start,
    end,
    visualSize,
    visualStart,
    visualEnd,
    pieces: piecesExt,
    stepStart: firstPiece.stepStart,
    stepEnd: lastPiece.stepEnd,
  };
};

/**
 * Snap value to the nearest step in the value map
 */
export const snapToStep = (
  value: number,
  valueMap: ValueMapExtended
): number => {
  const { pieces, start, end } = valueMap;

  if (value <= start) return start;
  if (value >= end) return end;

  const p = pieces.find((piece) => value >= piece.start && value <= piece.end);
  if (!p) return value;

  const pieceStep = p.step;
  const steps = (value - p.start) / pieceStep;
  const decimal = steps % 1;

  let snapped: number;
  if (decimal < 0.5) {
    snapped = Math.max(start, toFixed(p.start + Math.floor(steps) * pieceStep));
  } else {
    snapped = Math.min(end, toFixed(p.start + Math.ceil(steps) * pieceStep));
  }

  return toFixed(snapped);
};

/**
 * Convert a value to visual percentage (0-1) based on the value map
 */
export const valueToVisualPercentage = (
  value: number,
  valueMap: ValueMapExtended
): number => {
  const { pieces, start, end, visualSize } = valueMap;

  if (value <= start) return 0;
  if (value >= end) return 1;

  const p = pieces.find((piece) => value >= piece.start && value <= piece.end);
  if (!p) return 0;

  const visualPosition =
    p.visualStart + ((value - p.start) / p.size) * p.visualSize;
  return visualPosition / visualSize;
};

/**
 * Convert visual percentage (0-1) to value based on the value map
 */
export const visualPercentToValue = (
  visualPercent: number,
  valueMap: ValueMapExtended
): number => {
  const { pieces, start, end, visualSize } = valueMap;

  if (visualPercent <= 0) return start;
  if (visualPercent >= 1) return end;

  const visualPosition = visualSize * visualPercent;
  const p = pieces.find(
    (piece) =>
      visualPosition >= piece.visualStart && visualPosition <= piece.visualEnd
  );
  if (!p) return start;

  return p.start + ((visualPosition - p.visualStart) / p.visualSize) * p.size;
};

/**
 * Change value by a number of steps
 */
export const changeByStep = (
  value: number,
  steps: number,
  valueMap: ValueMapExtended
): number => {
  const { pieces, start, end } = valueMap;

  const p = pieces.find((piece) => value >= piece.start && value <= piece.end);
  if (!p) {
    if (value < start) return start;
    if (value > end) return end;
    return value;
  }

  const curStepNo = (value - p.start) / p.step + p.stepStart;
  const curStepRounded = Math.round(curStepNo);

  let stepsInValueMap: number;
  if (Math.abs(curStepRounded - curStepNo) < 0.00001) {
    stepsInValueMap = Math.round(curStepNo) + steps;
  } else if (steps < 0) {
    stepsInValueMap = Math.ceil(curStepNo) + steps;
  } else {
    stepsInValueMap = Math.floor(curStepNo) + steps;
  }

  if (stepsInValueMap <= valueMap.stepStart) {
    return valueMap.start;
  }
  if (stepsInValueMap >= valueMap.stepEnd) {
    return valueMap.end;
  }

  const newPiece = pieces.find(
    (piece) =>
      stepsInValueMap >= piece.stepStart && stepsInValueMap <= piece.stepEnd
  );
  if (!newPiece) return value;

  const newValue =
    newPiece.start + (stepsInValueMap - newPiece.stepStart) * newPiece.step;
  return toFixed(newValue);
};
