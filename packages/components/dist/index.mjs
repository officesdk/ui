import React9, { createContext, useState, useRef, useCallback, useEffect, useContext } from 'react';
import styled3, { ThemeProvider } from 'styled-components';

// src/Button/Button.tsx
var IconWrapper = styled3.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $size, $position, theme }) => {
  const sizeConfig = theme.components.button[$size || "medium"];
  const marginSide = $position === "before" ? "margin-right" : "margin-left";
  return `
      width: ${sizeConfig.iconSize.width};
      height: ${sizeConfig.iconSize.height};
      ${marginSide}: ${sizeConfig.iconGap};

      svg, img {
        width: 100%;
        height: 100%;
        display: block;
      }
    `;
}}
`;
var StyledButton = styled3.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: none;
  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};

  /* Size variants */
  ${({ $size, $isIconOnly, theme }) => {
  const sizeConfig = theme.components.button[$size || "medium"];
  if ($isIconOnly) {
    return `
        padding: 0;
        width: ${sizeConfig.height};
        height: ${sizeConfig.height};
        border-radius: ${sizeConfig.borderRadius};
      `;
  }
  return `
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      line-height: ${sizeConfig.lineHeight};
      border-radius: ${sizeConfig.borderRadius};
      min-height: ${sizeConfig.height};
    `;
}}

  /* Variant and color type styles */
  ${({ $variant, $colorType, $isIconOnly, $iconBordered, theme }) => {
  if ($variant === "icon" || $isIconOnly) {
    const baseVariant = $iconBordered ? "outlined" : "text";
    const styles2 = theme.components.button[baseVariant]["default"];
    return `
        background: ${styles2.background};
        color: ${styles2.color};
        border: 1px solid ${styles2.borderColor};
        box-shadow: ${styles2.boxShadow};

        &:hover:not(:disabled) {
          background: ${styles2.backgroundHover};
          color: ${styles2.colorHover};
          border-color: ${styles2.borderColorHover};
          box-shadow: ${styles2.boxShadowHover};
        }

        &:active:not(:disabled) {
          background: ${styles2.backgroundActive};
          color: ${styles2.colorActive};
          border-color: ${styles2.borderColorActive};
          box-shadow: ${styles2.boxShadowActive};
        }

        &:disabled {
          background: ${styles2.backgroundDisabled};
          color: ${styles2.colorDisabled};
          border-color: ${styles2.borderColorDisabled};
          box-shadow: ${styles2.boxShadowDisabled};
          cursor: not-allowed;
        }
      `;
  }
  const variant = $variant || "solid";
  const colorType = $colorType || "default";
  if (colorType === "status" && variant !== "text") {
    console.warn(`colorType 'status' is only available for 'text' variant. Falling back to 'default'.`);
  }
  const effectiveColorType = colorType === "status" && variant !== "text" ? "default" : colorType;
  const styles = theme.components.button[variant][effectiveColorType];
  return `
      background: ${styles.background};
      color: ${styles.color};
      border: 1px solid ${styles.borderColor};
      box-shadow: ${styles.boxShadow};
      font-weight: ${styles.fontWeight};

      &:hover:not(:disabled) {
        background: ${styles.backgroundHover};
        color: ${styles.colorHover};
        border-color: ${styles.borderColorHover};
        box-shadow: ${styles.boxShadowHover};
      }

      &:active:not(:disabled) {
        background: ${styles.backgroundActive};
        color: ${styles.colorActive};
        border-color: ${styles.borderColorActive};
        box-shadow: ${styles.boxShadowActive};
      }

      &:disabled {
        background: ${styles.backgroundDisabled};
        color: ${styles.colorDisabled};
        border-color: ${styles.borderColorDisabled};
        box-shadow: ${styles.boxShadowDisabled};
        cursor: not-allowed;
      }
    `;
}}
`;
var Button = ({
  variant = "solid",
  colorType = "default",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  iconBefore,
  iconAfter,
  iconBordered = false,
  onClick,
  children,
  className,
  style
}) => {
  const isIconOnly = variant === "icon" || !children && !!(iconBefore || iconAfter);
  const iconOnlyContent = iconBefore || iconAfter;
  return /* @__PURE__ */ React9.createElement(
    StyledButton,
    {
      $variant: variant,
      $colorType: colorType,
      $size: size,
      $fullWidth: fullWidth,
      $isIconOnly: isIconOnly,
      $iconBordered: iconBordered,
      disabled: disabled || loading,
      onClick,
      className,
      style
    },
    loading ? /* @__PURE__ */ React9.createElement(React9.Fragment, null, "Loading...") : isIconOnly ? iconOnlyContent : /* @__PURE__ */ React9.createElement(React9.Fragment, null, iconBefore && /* @__PURE__ */ React9.createElement(IconWrapper, { $size: size, $position: "before" }, iconBefore), children, iconAfter && /* @__PURE__ */ React9.createElement(IconWrapper, { $size: size, $position: "after" }, iconAfter))
  );
};
Button.displayName = "Button";
var SliderContainer = styled3.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};
  user-select: none;
`;
var SliderTrack = styled3.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.palettes.transparency["20"]};
  border-radius: 1000px;
  top: 50%;
  transform: translateY(-50%);
`;
var SliderFill = styled3.div`
  position: absolute;
  left: 0;
  height: 2px;
  border-radius: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $percentage }) => $percentage}%;
  background: ${({ $disabled, theme }) => $disabled ? theme.colors.palettes.transparency["10"] : theme.colors.palettes.gray["100"]};
`;
var SliderThumb = styled3.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $disabled, theme }) => $disabled ? theme.colors.palettes.transparency["30"] : theme.colors.palettes.blue["5"]};
  left: ${({ $percentage }) => $percentage}%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "grab"};
  transition: ${({ $isDragging }) => $isDragging ? "none" : "left 0.1s ease"};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  ${({ $disabled }) => !$disabled && `
    &:hover {
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }

    &:active {
      cursor: grabbing;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    }
  `}
`;
var Slider = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  onDragStart,
  onDragEnd,
  className,
  style
}) => {
  const [internalValue, setInternalValue] = useState(
    controlledValue ?? defaultValue
  );
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const value = controlledValue !== void 0 ? controlledValue : internalValue;
  const percentage = (value - min) / (max - min) * 100;
  const updateValue = useCallback(
    (clientX) => {
      if (!containerRef.current || disabled) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const newPercentage = Math.max(0, Math.min(100, offsetX / rect.width * 100));
      const rawValue = newPercentage / 100 * (max - min) + min;
      const steppedValue = Math.round(rawValue / step) * step;
      const clampedValue = Math.max(min, Math.min(max, steppedValue));
      if (controlledValue === void 0) {
        setInternalValue(clampedValue);
      }
      onChange?.(clampedValue);
    },
    [min, max, step, disabled, controlledValue, onChange]
  );
  const handleMouseDown = useCallback(
    (e) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(true);
      onDragStart?.();
      updateValue(e.clientX);
    },
    [disabled, onDragStart, updateValue]
  );
  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => {
      updateValue(e.clientX);
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      onDragEnd?.();
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, updateValue, onDragEnd]);
  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return;
      let newValue = value;
      switch (e.key) {
        case "ArrowLeft":
        case "ArrowDown":
          e.preventDefault();
          newValue = Math.max(min, value - step);
          break;
        case "ArrowRight":
        case "ArrowUp":
          e.preventDefault();
          newValue = Math.min(max, value + step);
          break;
        case "Home":
          e.preventDefault();
          newValue = min;
          break;
        case "End":
          e.preventDefault();
          newValue = max;
          break;
        default:
          return;
      }
      if (controlledValue === void 0) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [disabled, value, min, max, step, controlledValue, onChange]
  );
  return /* @__PURE__ */ React9.createElement(
    SliderContainer,
    {
      ref: containerRef,
      $disabled: disabled,
      className,
      style,
      onMouseDown: handleMouseDown,
      onKeyDown: handleKeyDown,
      tabIndex: disabled ? -1 : 0,
      role: "slider",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": value,
      "aria-disabled": disabled
    },
    /* @__PURE__ */ React9.createElement(SliderTrack, { $disabled: disabled }),
    /* @__PURE__ */ React9.createElement(SliderFill, { $percentage: percentage, $disabled: disabled }),
    /* @__PURE__ */ React9.createElement(
      SliderThumb,
      {
        $percentage: percentage,
        $disabled: disabled,
        $isDragging: isDragging
      }
    )
  );
};
Slider.displayName = "Slider";

// src/Button/SpinButton.tsx
var SpinButtonWrapper = styled3.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ $showSlider }) => $showSlider ? "0" : "0"};
  width: ${({ $showSlider }) => $showSlider ? "100%" : "auto"};
`;
var SliderWrapper = styled3.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({ $size }) => $size === "small" ? "7px 0" : "7px 0"};
  padding-right: ${({ $size }) => $size === "small" ? "83px" : "72px"};
  min-width: 0;
`;
var SpinButtonContainer = styled3.div`
  display: inline-flex;
  align-items: center;
  background: white;
  border: 1px solid;
  border-radius: 2px;
  flex-shrink: 0;

  ${({ $size }) => $size === "small" ? `
    height: 24px;
    width: 72px;
  ` : `
    height: 32px;
    width: 80px;
  `}

  ${({ $disabled, $alert, $isFocused, theme }) => {
  if ($disabled) {
    return `
        border-color: ${theme.colors.palettes.transparency["10"]};
        cursor: not-allowed;
      `;
  }
  if ($alert) {
    return `
        border-color: ${theme.colors.palettes.red["6"]};
      `;
  }
  if ($isFocused) {
    return `
        border-color: ${theme.colors.palettes.transparency["30"]};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
      `;
  }
  return `
      border-color: ${theme.colors.palettes.transparency["10"]};

      &:hover {
        border-color: ${theme.colors.palettes.transparency["20"]};
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
      }
    `;
}}
`;
var InputWrapper = styled3.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 8px;
  min-width: 0;
`;
var StyledInput = styled3.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 400;
  line-height: 20px;
  padding: 0;
  margin: 0;

  ${({ $size }) => $size === "small" ? `
    font-size: 12px;
  ` : `
    font-size: 13px;
  `}

  ${({ $disabled, theme }) => $disabled ? `
    color: ${theme.colors.palettes.transparency["30"]};
    cursor: not-allowed;
  ` : `
    color: ${theme.colors.palettes.gray["120"]};
  `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.palettes.transparency["30"]};
  }

  /* Remove number input arrows */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;
var ButtonGroup = styled3.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid;

  ${({ $disabled, $alert, theme }) => {
  if ($disabled) {
    return `border-color: ${theme.colors.palettes.transparency["10"]};`;
  }
  if ($alert) {
    return `border-color: ${theme.colors.palettes.red["6"]};`;
  }
  return `border-color: ${theme.colors.palettes.transparency["10"]};`;
}}
`;
var StepButton = styled3.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 1px 8px;
  outline: none;

  ${({ $position, $alert, $disabled, theme }) => {
  if ($position === "up") {
    return `
        border-bottom: 1px solid ${$disabled ? theme.colors.palettes.transparency["10"] : $alert ? theme.colors.palettes.red["6"] : theme.colors.palettes.transparency["10"]};
      `;
  }
  return "";
}}

  ${({ $disabled, theme }) => {
  if ($disabled) {
    return `
        cursor: not-allowed;
        opacity: 0.4;
      `;
  }
  return `
      &:hover {
        background-color: ${theme.colors.palettes.transparency["5"]};
      }

      &:active {
        background-color: ${theme.colors.palettes.transparency["10"]};
      }
    `;
}}

  svg {
    width: 14px;
    height: 14px;
    fill: ${({ $disabled, theme }) => $disabled ? theme.colors.palettes.transparency["30"] : theme.colors.palettes.gray["120"]};
  }
`;
var UpArrow = () => /* @__PURE__ */ React9.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("path", { d: "M7 4.5L10.5 8.5H3.5L7 4.5Z", fill: "currentColor" }));
var DownArrow = () => /* @__PURE__ */ React9.createElement("svg", { viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("path", { d: "M7 9.5L3.5 5.5H10.5L7 9.5Z", fill: "currentColor" }));
var SpinButton = ({
  value: controlledValue,
  defaultValue = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  size = "large",
  disabled = false,
  alert = false,
  showSlider = false,
  precision,
  formatter,
  parser,
  onChange,
  className,
  style
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue ?? defaultValue);
  const [displayValue, setDisplayValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const value = controlledValue !== void 0 ? controlledValue : internalValue;
  const formatValue = useCallback((val) => {
    if (formatter) {
      return formatter(val);
    }
    if (precision !== void 0) {
      return val.toFixed(precision);
    }
    return String(val);
  }, [formatter, precision]);
  const parseValue = useCallback((displayVal) => {
    if (parser) {
      return parser(displayVal);
    }
    const parsed = parseFloat(displayVal);
    return isNaN(parsed) ? null : parsed;
  }, [parser]);
  useEffect(() => {
    if (!isFocused) {
      setDisplayValue(formatValue(value));
    }
  }, [value, isFocused, formatValue]);
  const clampValue = useCallback((val) => {
    return Math.max(min, Math.min(max, val));
  }, [min, max]);
  const handleValueChange = useCallback((newValue) => {
    const clampedValue = clampValue(newValue);
    if (controlledValue === void 0) {
      setInternalValue(clampedValue);
    }
    onChange?.(clampedValue);
  }, [clampValue, controlledValue, onChange]);
  const increment = useCallback(() => {
    if (disabled) return;
    handleValueChange(value + step);
  }, [disabled, value, step, handleValueChange]);
  const decrement = useCallback(() => {
    if (disabled) return;
    handleValueChange(value - step);
  }, [disabled, value, step, handleValueChange]);
  const handleInputChange = useCallback((e) => {
    setDisplayValue(e.target.value);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    const parsed = parseValue(displayValue);
    if (parsed !== null) {
      handleValueChange(parsed);
    } else {
      setDisplayValue(formatValue(value));
    }
  }, [displayValue, parseValue, handleValueChange, value, formatValue]);
  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setDisplayValue(String(value));
  }, [value]);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increment();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      decrement();
    } else if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  }, [increment, decrement]);
  return /* @__PURE__ */ React9.createElement(
    SpinButtonWrapper,
    {
      $showSlider: showSlider,
      className,
      style
    },
    showSlider && /* @__PURE__ */ React9.createElement(SliderWrapper, { $size: size }, /* @__PURE__ */ React9.createElement(
      Slider,
      {
        value,
        min,
        max,
        step,
        disabled,
        onChange: (val) => handleValueChange(val)
      }
    )),
    /* @__PURE__ */ React9.createElement(
      SpinButtonContainer,
      {
        $size: size,
        $disabled: disabled,
        $alert: alert,
        $isFocused: isFocused
      },
      /* @__PURE__ */ React9.createElement(InputWrapper, null, /* @__PURE__ */ React9.createElement(
        StyledInput,
        {
          ref: inputRef,
          type: "text",
          value: displayValue,
          onChange: handleInputChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onKeyDown: handleKeyDown,
          disabled,
          $size: size,
          $disabled: disabled
        }
      )),
      /* @__PURE__ */ React9.createElement(ButtonGroup, { $alert: alert, $disabled: disabled }, /* @__PURE__ */ React9.createElement(
        StepButton,
        {
          type: "button",
          $position: "up",
          $alert: alert,
          $disabled: disabled,
          onClick: increment,
          disabled,
          tabIndex: -1
        },
        /* @__PURE__ */ React9.createElement(UpArrow, null)
      ), /* @__PURE__ */ React9.createElement(
        StepButton,
        {
          type: "button",
          $position: "down",
          $alert: alert,
          $disabled: disabled,
          onClick: decrement,
          disabled,
          tabIndex: -1
        },
        /* @__PURE__ */ React9.createElement(DownArrow, null)
      ))
    )
  );
};
SpinButton.displayName = "SpinButton";
var SwitchContainer = styled3.label`
  position: relative;
  display: inline-block;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};

  ${({ $size, theme }) => {
  const sizeConfig = theme.components.switch[$size];
  return `
      width: ${sizeConfig.container.width};
      height: ${sizeConfig.container.height};
    `;
}}
`;
var HiddenInput = styled3.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;
var Track = styled3.div`
  position: absolute;
  inset: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${({ theme }) => theme.components.switch.transition || "all 0.2s ease"};

  ${({ $size, theme }) => {
  const sizeConfig = theme.components.switch[$size];
  return `
      border-radius: ${sizeConfig.track.borderRadius};
      width: ${sizeConfig.track.width};
      height: ${sizeConfig.track.height};
    `;
}}

  ${({ $checked, $disabled, theme }) => {
  const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;
  if ($disabled) {
    return `
        background: ${stateConfig.track.backgroundDisabled};
        box-shadow: ${stateConfig.track.boxShadowDisabled};
      `;
  }
  return `
      background: ${stateConfig.track.background};
      box-shadow: ${stateConfig.track.boxShadow};
    `;
}}

  ${({ $disabled, $checked, theme }) => {
  if ($disabled) return "";
  const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;
  return `
      :hover {
        background: ${stateConfig.track.backgroundHover};
        box-shadow: ${stateConfig.track.boxShadowHover};
      }
    `;
}}
`;
var Thumb = styled3.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-style: solid;
  box-sizing: border-box;
  transition: ${({ theme }) => theme.components.switch.transition || "all 0.2s ease"};

  ${({ $size, $checked, theme }) => {
  const sizeConfig = theme.components.switch[$size];
  const thumbSize = sizeConfig.thumb.size;
  const thumbOffset = sizeConfig.thumb.offset;
  const thumbBorderRadius = sizeConfig.thumb.borderRadius;
  const thumbBorderWidth = sizeConfig.thumb.borderWidth;
  return `
      width: ${thumbSize};
      height: ${thumbSize};
      border-radius: ${thumbBorderRadius};
      border-width: ${thumbBorderWidth};
      ${$checked ? "right" : "left"}: ${thumbOffset};
    `;
}}

  ${({ $checked, $disabled, theme }) => {
  const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;
  if ($disabled) {
    return `
        background: ${stateConfig.thumb.backgroundDisabled};
        border-color: ${stateConfig.thumb.borderColorDisabled};
        box-shadow: ${stateConfig.thumb.boxShadowDisabled};
      `;
  }
  return `
      background: ${stateConfig.thumb.background};
      border-color: ${stateConfig.thumb.borderColor};
      box-shadow: ${stateConfig.thumb.boxShadow};
    `;
}}

  ${({ $disabled, $checked, theme }) => {
  if ($disabled) return "";
  const stateConfig = $checked ? theme.components.switch.on : theme.components.switch.off;
  return `
      :hover & {
        background: ${stateConfig.thumb.backgroundHover};
        border-color: ${stateConfig.thumb.borderColorHover};
        box-shadow: ${stateConfig.thumb.boxShadowHover};
      }
    `;
}}
`;
var Switch = ({
  checked: controlledChecked,
  defaultChecked = false,
  size = "large",
  disabled = false,
  onChange,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = useState(
    controlledChecked ?? defaultChecked
  );
  const [isFocused, setIsFocused] = useState(false);
  const checked = controlledChecked !== void 0 ? controlledChecked : internalChecked;
  const handleChange = useCallback(
    (e) => {
      if (disabled) return;
      const newChecked = e.target.checked;
      if (controlledChecked === void 0) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    },
    [disabled, controlledChecked, onChange]
  );
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return /* @__PURE__ */ React9.createElement(
    SwitchContainer,
    {
      $size: size,
      $checked: checked,
      $disabled: disabled,
      className,
      style
    },
    /* @__PURE__ */ React9.createElement(
      HiddenInput,
      {
        type: "checkbox",
        checked,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled
      }
    ),
    /* @__PURE__ */ React9.createElement(
      Track,
      {
        $size: size,
        $checked: checked,
        $disabled: disabled,
        $isFocused: isFocused
      }
    ),
    /* @__PURE__ */ React9.createElement(
      Thumb,
      {
        $size: size,
        $checked: checked,
        $disabled: disabled,
        $isFocused: isFocused
      }
    )
  );
};
Switch.displayName = "Switch";
var RadioContainer = styled3.label`
  position: relative;
  display: inline-block;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};

  ${({ theme }) => {
  const sizeConfig = theme.components.radio.small;
  return `
      width: ${sizeConfig.size};
      height: ${sizeConfig.size};
    `;
}}
`;
var HiddenInput2 = styled3.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;
var RadioOuter = styled3.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid;
  transition: all 0.2s ease;

  ${({ $checked, $disabled, theme }) => {
  if ($disabled) {
    const stateConfig = $checked ? theme.components.radio.checked : theme.components.radio.unchecked;
    return `
        background: ${stateConfig.backgroundDisabled};
        border-color: ${stateConfig.borderColorDisabled};
      `;
  }
  if ($checked) {
    const checkedConfig = theme.components.radio.checked;
    return `
        background: ${checkedConfig.background};
        border-color: ${checkedConfig.borderColor};
      `;
  }
  const uncheckedConfig = theme.components.radio.unchecked;
  return `
      background: ${uncheckedConfig.background};
      border-color: ${uncheckedConfig.borderColor};
    `;
}}

  ${({ $disabled, $checked, theme }) => {
  if ($disabled) return "";
  const stateConfig = $checked ? theme.components.radio.checked : theme.components.radio.unchecked;
  return `
      ${RadioContainer}:hover & {
        background: ${stateConfig.backgroundHover};
        border-color: ${stateConfig.borderColorHover};
      }

      ${RadioContainer}:active & {
        border-color: ${stateConfig.borderColorActive};
      }
    `;
}}
`;
var RadioInner = styled3.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: white;
  opacity: ${({ $checked }) => $checked ? 1 : 0};
  transition: opacity 0.2s ease;

  ${({ theme }) => {
  const dotSize = theme.components.radio.small.dotSize;
  return `
      width: ${dotSize};
      height: ${dotSize};
    `;
}}
`;
var Radio = ({
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  value,
  name,
  id,
  onChange,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = useState(
    controlledChecked ?? defaultChecked
  );
  const [isFocused, setIsFocused] = useState(false);
  const checked = controlledChecked !== void 0 ? controlledChecked : internalChecked;
  const handleChange = useCallback(
    (e) => {
      if (disabled) return;
      const newChecked = e.target.checked;
      if (controlledChecked === void 0) {
        setInternalChecked(newChecked);
      }
      onChange?.(e);
    },
    [disabled, controlledChecked, onChange]
  );
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return /* @__PURE__ */ React9.createElement(
    RadioContainer,
    {
      $disabled: disabled,
      className,
      style
    },
    /* @__PURE__ */ React9.createElement(
      HiddenInput2,
      {
        type: "radio",
        id,
        checked,
        value,
        name,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled
      }
    ),
    /* @__PURE__ */ React9.createElement(
      RadioOuter,
      {
        $checked: checked,
        $disabled: disabled,
        $isFocused: isFocused
      }
    ),
    /* @__PURE__ */ React9.createElement(
      RadioInner,
      {
        $checked: checked,
        $disabled: disabled
      }
    )
  );
};
Radio.displayName = "Radio";
var CheckboxContainer = styled3.label`
  position: relative;
  display: inline-block;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};

  ${({ theme }) => {
  const sizeConfig = theme.components.checkbox.small;
  return `
      width: ${sizeConfig.size};
      height: ${sizeConfig.size};
    `;
}}
`;
var HiddenInput3 = styled3.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;
var CheckboxBox = styled3.div`
  position: absolute;
  inset: 1px;
  border: 1px solid;
  transition: all 0.2s ease;

  ${({ theme }) => {
  const sizeConfig = theme.components.checkbox.small;
  return `
      border-radius: ${sizeConfig.borderRadius};
    `;
}}

  ${({ $checked, $indeterminate, $disabled, theme }) => {
  if ($disabled) {
    const stateConfig = $checked || $indeterminate ? theme.components.checkbox.checked : theme.components.checkbox.unchecked;
    return `
        background: ${stateConfig.backgroundDisabled};
        border-color: ${stateConfig.borderColorDisabled};
      `;
  }
  if ($checked) {
    const checkedConfig = theme.components.checkbox.checked;
    return `
        background: ${checkedConfig.background};
        border-color: ${checkedConfig.borderColor};
      `;
  }
  if ($indeterminate) {
    const indeterminateConfig = theme.components.checkbox.indeterminate;
    return `
        background: ${indeterminateConfig.background};
        border-color: ${indeterminateConfig.borderColor};
      `;
  }
  const uncheckedConfig = theme.components.checkbox.unchecked;
  return `
      background: ${uncheckedConfig.background};
      border-color: ${uncheckedConfig.borderColor};
    `;
}}

  ${({ $disabled, $checked, $indeterminate, theme }) => {
  if ($disabled) return "";
  const stateConfig = $checked || $indeterminate ? theme.components.checkbox.checked : theme.components.checkbox.unchecked;
  return `
      ${CheckboxContainer}:hover & {
        background: ${stateConfig.backgroundHover};
        border-color: ${stateConfig.borderColorHover};
      }

      ${CheckboxContainer}:active & {
        border-color: ${stateConfig.borderColorActive};
      }
    `;
}}
`;
var IconWrapper2 = styled3.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity 0.2s ease;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => {
  const iconSize = theme.components.checkbox.small.iconSize;
  return `
      width: ${iconSize.width};
      height: ${iconSize.height};
    `;
}}

  svg, img {
    display: block;
  }
`;
var DefaultIndeterminateIcon = styled3.div`
  width: 8px;
  height: 2px;
  background: white;
`;
var Checkbox = ({
  checked: controlledChecked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  value,
  name,
  id,
  onChange,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = useState(
    controlledChecked ?? defaultChecked
  );
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const checked = controlledChecked !== void 0 ? controlledChecked : internalChecked;
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  const handleChange = useCallback(
    (e) => {
      if (disabled) return;
      const newChecked = e.target.checked;
      if (controlledChecked === void 0) {
        setInternalChecked(newChecked);
      }
      onChange?.(e);
    },
    [disabled, controlledChecked, onChange]
  );
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return /* @__PURE__ */ React9.createElement(
    CheckboxContainer,
    {
      $disabled: disabled,
      className,
      style
    },
    /* @__PURE__ */ React9.createElement(
      HiddenInput3,
      {
        ref: inputRef,
        type: "checkbox",
        id,
        checked,
        value,
        name,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled
      }
    ),
    /* @__PURE__ */ React9.createElement(
      CheckboxBox,
      {
        $checked: checked,
        $indeterminate: indeterminate,
        $disabled: disabled,
        $isFocused: isFocused
      }
    ),
    !indeterminate && /* @__PURE__ */ React9.createElement(IconWrapper2, { $visible: checked }, /* @__PURE__ */ React9.createElement("svg", { width: 10, height: 8, viewBox: "0 0 10 8", fill: "#fff" }, /* @__PURE__ */ React9.createElement("path", { d: "M1.05426 3.16164L0 4.27945L3.50904 8L10 1.11781L8.94573 0L3.50904 5.76438L1.05426 3.16164Z" }))),
    indeterminate && /* @__PURE__ */ React9.createElement(IconWrapper2, { $visible: indeterminate }, /* @__PURE__ */ React9.createElement(DefaultIndeterminateIcon, null))
  );
};
Checkbox.displayName = "Checkbox";
var IconContext = createContext(null);
var IconProvider = ({
  icons,
  children
}) => {
  return /* @__PURE__ */ React9.createElement(IconContext.Provider, { value: icons }, children);
};
var useIconRegistry = () => {
  return useContext(IconContext);
};
IconProvider.displayName = "IconProvider";

// src/Icon/Icon.tsx
var IconContainer = styled3.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => typeof $size === "number" ? `${$size}px` : $size};
  height: ${({ $size }) => typeof $size === "number" ? `${$size}px` : $size};
  color: ${({ $color }) => $color};
  flex-shrink: 0;
  line-height: 1;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
var Icon = ({
  name,
  src,
  children,
  size = 16,
  color = "currentColor",
  alt = "icon",
  className,
  style,
  onClick
}) => {
  const registry = useIconRegistry();
  let iconElement = children;
  if (!iconElement && src) {
    iconElement = /* @__PURE__ */ React9.createElement(
      "img",
      {
        src,
        alt,
        style: { width: "100%", height: "100%", display: "block" }
      }
    );
  }
  if (!iconElement && name && registry) {
    const IconComponent = registry[name];
    if (IconComponent) {
      iconElement = /* @__PURE__ */ React9.createElement(IconComponent, null);
    } else if (process.env.NODE_ENV !== "production") {
      console.warn(`Icon "${name}" not found in registry. Make sure IconProvider is set up.`);
    }
  }
  if (!iconElement) {
    if (process.env.NODE_ENV !== "production" && !children && !name && !src) {
      console.warn('Icon: one of "name", "src", or "children" must be provided');
    }
    return null;
  }
  return /* @__PURE__ */ React9.createElement(
    IconContainer,
    {
      $size: size,
      $color: color,
      className,
      style,
      onClick
    },
    iconElement
  );
};
Icon.displayName = "Icon";
var ToastContainer = styled3.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);

  ${({ theme }) => {
  const baseConfig = theme.components.toast;
  return `
      padding: ${baseConfig.padding};
      border-radius: ${baseConfig.borderRadius};
      font-size: ${baseConfig.fontSize};
      font-weight: ${baseConfig.fontWeight};
    `;
}}

  ${({ $variant, theme }) => {
  const variantConfig = theme.components.toast[$variant];
  return `
      background: ${variantConfig.background};
      border-color: ${variantConfig.borderColor};
    `;
}}
`;
var IconWrapper3 = styled3.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $variant, theme }) => {
  const iconConfig = theme.components.toast[$variant].icon;
  return `
      width: ${iconConfig.size.width};
      height: ${iconConfig.size.height};
    `;
}}
`;
var Message = styled3.span`
  flex: 1;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.palettes.gray["120"]};
`;
var ActionButton = styled3.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;

  ${({ $variant, theme }) => {
  const buttonConfig = theme.components.toast[$variant].button;
  return `
      font-size: ${buttonConfig.fontSize};
      font-weight: ${buttonConfig.fontWeight};
      color: ${buttonConfig.color};
      margin-left: ${buttonConfig.gap};
    `;
}}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
var CloseButton = styled3.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.palettes.gray["60"]};
  flex-shrink: 0;
  outline: none;

  &:hover {
    color: ${({ theme }) => theme.colors.palettes.gray["100"]};
  }

  &:active {
    color: ${({ theme }) => theme.colors.palettes.gray["120"]};
  }
`;
var SuccessIcon = () => /* @__PURE__ */ React9.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("circle", { cx: "10", cy: "10", r: "8", fill: "#4ea44b" }), /* @__PURE__ */ React9.createElement("path", { d: "M6 10L9 13L14 7", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }));
var InfoIcon = () => /* @__PURE__ */ React9.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("circle", { cx: "10", cy: "10", r: "8", fill: "#5ba0e7" }), /* @__PURE__ */ React9.createElement("path", { d: "M10 9V14M10 6H10.01", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }));
var ErrorIcon = () => /* @__PURE__ */ React9.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("circle", { cx: "10", cy: "10", r: "8", fill: "#e95555" }), /* @__PURE__ */ React9.createElement("path", { d: "M7 7L13 13M13 7L7 13", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }));
var WarnIcon = () => /* @__PURE__ */ React9.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("circle", { cx: "10", cy: "10", r: "8", fill: "#ebe361" }), /* @__PURE__ */ React9.createElement("path", { d: "M10 6V11M10 14H10.01", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }));
var CloseIconSvg = () => /* @__PURE__ */ React9.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React9.createElement("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }));
var Toast = ({
  variant = "info",
  message,
  actionText,
  onAction,
  closable = false,
  onClose,
  duration = 0,
  icon,
  showIcon = true,
  className,
  style
}) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };
  if (!visible) {
    return null;
  }
  const defaultIcons = {
    success: /* @__PURE__ */ React9.createElement(SuccessIcon, null),
    info: /* @__PURE__ */ React9.createElement(InfoIcon, null),
    error: /* @__PURE__ */ React9.createElement(ErrorIcon, null),
    warn: /* @__PURE__ */ React9.createElement(WarnIcon, null)
  };
  const iconElement = icon || defaultIcons[variant];
  return /* @__PURE__ */ React9.createElement(
    ToastContainer,
    {
      $variant: variant,
      className,
      style,
      role: "alert",
      "aria-live": "polite"
    },
    showIcon && /* @__PURE__ */ React9.createElement(IconWrapper3, { $variant: variant }, iconElement),
    /* @__PURE__ */ React9.createElement(Message, null, message),
    actionText && onAction && /* @__PURE__ */ React9.createElement(
      ActionButton,
      {
        $variant: variant,
        onClick: onAction,
        type: "button"
      },
      actionText
    ),
    closable && /* @__PURE__ */ React9.createElement(
      CloseButton,
      {
        onClick: handleClose,
        type: "button",
        "aria-label": "Close"
      },
      /* @__PURE__ */ React9.createElement(CloseIconSvg, null)
    )
  );
};
Toast.displayName = "Toast";
var ToastContext = createContext(null);
var ToastWrapper = styled3.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;
var ToastContainer2 = ({
  maxCount = 5,
  defaultDuration = 3e3,
  children
}) => {
  const [toasts, setToasts] = useState([]);
  const showToast = useCallback((props) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const newToast = {
      ...props,
      id,
      duration: props.duration ?? defaultDuration
    };
    setToasts((prev) => {
      const updated = [...prev, newToast];
      return updated.slice(-maxCount);
    });
    return id;
  }, [maxCount, defaultDuration]);
  const hideToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);
  const success = useCallback((message, options) => {
    return showToast({ ...options, variant: "success", message });
  }, [showToast]);
  const info = useCallback((message, options) => {
    return showToast({ ...options, variant: "info", message });
  }, [showToast]);
  const error = useCallback((message, options) => {
    return showToast({ ...options, variant: "error", message });
  }, [showToast]);
  const warn = useCallback((message, options) => {
    return showToast({ ...options, variant: "warn", message });
  }, [showToast]);
  const contextValue = {
    showToast,
    hideToast,
    success,
    info,
    error,
    warn
  };
  return /* @__PURE__ */ React9.createElement(ToastContext.Provider, { value: contextValue }, children, /* @__PURE__ */ React9.createElement(ToastWrapper, null, toasts.map((toast) => /* @__PURE__ */ React9.createElement(
    Toast,
    {
      key: toast.id,
      ...toast,
      onClose: () => hideToast(toast.id)
    }
  ))));
};
var useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastContainer");
  }
  return context;
};
ToastContainer2.displayName = "ToastContainer";
var TabContainer = styled3.div`
  display: flex;
  flex-direction: column;
`;
var TabList = styled3.div`
  display: flex;
  align-items: center;
  position: relative;

  ${({ $variant, theme }) => {
  const variantConfig = theme.components.tab[$variant];
  return `
      gap: ${variantConfig.layout.gap};
    `;
}}

  ${({ $variant }) => {
  if ($variant === "line") {
    return `
        border-bottom: 2px solid rgba(65, 70, 75, 0.1);
      `;
  }
  return "";
}}
`;
var TabItem = styled3.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  outline: none;
  cursor: ${({ $disabled }) => $disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;

  ${({ theme }) => {
  const sizeConfig = theme.components.tab.large;
  return `
      height: ${sizeConfig.height};
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      line-height: ${sizeConfig.lineHeight};
      border-radius: ${sizeConfig.borderRadius};
      font-weight: ${sizeConfig.fontWeight};
    `;
}}

  ${({ $variant, $active, $disabled, theme }) => {
  const variantConfig = theme.components.tab[$variant];
  const itemConfig = variantConfig.item;
  if ($disabled) {
    return `
        background: ${itemConfig.backgroundDisabled};
        border-color: ${itemConfig.borderColorDisabled};
        color: ${itemConfig.colorDisabled};
      `;
  }
  if ($active) {
    return `
        background: ${itemConfig.backgroundActive};
        border-color: ${itemConfig.borderColorActive};
        color: ${itemConfig.colorActive};
      `;
  }
  return `
      background: ${itemConfig.background};
      border-color: ${itemConfig.borderColor};
      color: ${itemConfig.color};
    `;
}}

  ${({ $variant, $disabled, theme }) => {
  if ($disabled) return "";
  const variantConfig = theme.components.tab[$variant];
  const itemConfig = variantConfig.item;
  return `
      &:hover {
        background: ${itemConfig.backgroundHover};
        border-color: ${itemConfig.borderColorHover};
        color: ${itemConfig.colorHover};
      }
    `;
}}

  ${({ $variant, $active }) => {
  if ($variant === "line" && $active) {
    return `
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: currentColor;
        }
      `;
  }
  if ($variant === "card") {
    return `
        border: 1px solid;
        ${$active ? `
          border-bottom-color: transparent;
          margin-bottom: -1px;
        ` : ""}
      `;
  }
  return "";
}}
`;
var Tab = ({
  items,
  activeKey: controlledActiveKey,
  defaultActiveKey,
  variant = "line",
  onChange,
  className,
  style
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    controlledActiveKey ?? defaultActiveKey ?? items[0]?.key ?? ""
  );
  const activeKey = controlledActiveKey !== void 0 ? controlledActiveKey : internalActiveKey;
  const handleTabClick = useCallback(
    (key, disabled) => {
      if (disabled) return;
      if (controlledActiveKey === void 0) {
        setInternalActiveKey(key);
      }
      onChange?.(key);
    },
    [controlledActiveKey, onChange]
  );
  return /* @__PURE__ */ React9.createElement(TabContainer, { className, style }, /* @__PURE__ */ React9.createElement(TabList, { $variant: variant, role: "tablist" }, items.map((item) => /* @__PURE__ */ React9.createElement(
    TabItem,
    {
      key: item.key,
      $variant: variant,
      $active: activeKey === item.key,
      $disabled: item.disabled || false,
      onClick: () => handleTabClick(item.key, item.disabled),
      role: "tab",
      "aria-selected": activeKey === item.key,
      "aria-disabled": item.disabled,
      disabled: item.disabled,
      type: "button"
    },
    item.icon && /* @__PURE__ */ React9.createElement("span", null, item.icon),
    item.label
  ))));
};
Tab.displayName = "Tab";
var UIConfigContext = createContext(null);
var UIConfigProvider = ({
  config,
  children
}) => {
  const {
    theme,
    icons = {},
    toast = {}
  } = config;
  const toastConfig = {
    maxCount: toast.maxCount ?? 5,
    defaultDuration: toast.defaultDuration ?? 3e3
  };
  const Provider = ThemeProvider;
  return /* @__PURE__ */ React9.createElement(UIConfigContext.Provider, { value: config }, /* @__PURE__ */ React9.createElement(Provider, { theme }, /* @__PURE__ */ React9.createElement(IconProvider, { icons }, /* @__PURE__ */ React9.createElement(
    ToastContainer2,
    {
      maxCount: toastConfig.maxCount,
      defaultDuration: toastConfig.defaultDuration
    },
    children
  ))));
};
var useUIConfig = () => {
  const context = useContext(UIConfigContext);
  if (!context) {
    throw new Error("useUIConfig must be used within UIConfigProvider");
  }
  return context;
};
UIConfigProvider.displayName = "UIConfigProvider";

// src/UIConfigProvider/createUIConfig.ts
var createUIConfig = (config) => {
  return {
    // Theme is required
    theme: config.theme,
    // Icons with default
    icons: config.icons ?? {},
    // Toast with defaults
    toast: {
      maxCount: config.toast?.maxCount ?? 5,
      defaultDuration: config.toast?.defaultDuration ?? 3e3,
      position: config.toast?.position ?? "top-right",
      offset: {
        x: config.toast?.offset?.x ?? 24,
        y: config.toast?.offset?.y ?? 24
      }
    },
    // Locale with default
    locale: config.locale ?? "en-US",
    // I18n with defaults
    i18n: {
      toast: {
        closeLabel: config.i18n?.toast?.closeLabel ?? "Close"
      },
      button: {
        loadingText: config.i18n?.button?.loadingText ?? "Loading..."
      },
      common: {
        confirm: config.i18n?.common?.confirm ?? "Confirm",
        cancel: config.i18n?.common?.cancel ?? "Cancel",
        ok: config.i18n?.common?.ok ?? "OK"
      }
    },
    // Z-index with defaults
    zIndex: {
      toast: config.zIndex?.toast ?? 9999,
      modal: config.zIndex?.modal ?? 1e4,
      dropdown: config.zIndex?.dropdown ?? 1e3,
      tooltip: config.zIndex?.tooltip ?? 1001
    },
    // Animation with defaults
    animation: {
      duration: config.animation?.duration ?? 200,
      easing: config.animation?.easing ?? "cubic-bezier(0.4, 0, 0.2, 1)",
      disabled: config.animation?.disabled ?? false
    },
    // A11y with defaults
    a11y: {
      announceMessages: config.a11y?.announceMessages ?? true,
      focusVisible: config.a11y?.focusVisible ?? true,
      reduceMotion: config.a11y?.reduceMotion ?? false
    }
  };
};
var mergeUIConfig = (baseConfig, ...configs) => {
  const merged = configs.reduce((acc, config) => ({
    ...acc,
    ...config,
    toast: { ...acc.toast, ...config.toast },
    i18n: { ...acc.i18n, ...config.i18n },
    zIndex: { ...acc.zIndex, ...config.zIndex },
    animation: { ...acc.animation, ...config.animation },
    a11y: { ...acc.a11y, ...config.a11y }
  }), baseConfig);
  return merged;
};

export { Button, Checkbox, Icon, IconProvider, Radio, Slider, SpinButton, Switch, Tab, Toast, ToastContainer2 as ToastContainer, UIConfigProvider, createUIConfig, mergeUIConfig, useIconRegistry, useToast, useUIConfig };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map