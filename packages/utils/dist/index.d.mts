/**
 * Utility function to merge class names
 */
declare function classNames(...classes: (string | undefined | null | false)[]): string;
/**
 * Debounce function - delays invoking func until after wait milliseconds
 */
declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function - limits function invocation to once per limit milliseconds
 */
declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Deep merge objects recursively
 */
declare function deepMerge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T;

export { classNames, debounce, deepMerge, throttle };
