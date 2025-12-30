'use strict';

// src/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function debounce(func, wait) {
  let timeout = null;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return deepMerge(target, ...sources);
}
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

exports.classNames = classNames;
exports.debounce = debounce;
exports.deepMerge = deepMerge;
exports.throttle = throttle;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map