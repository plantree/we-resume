/* eslint-disable @typescript-eslint/no-explicit-any */
const isObject = (obj: any): boolean => {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

/**
 * Deep merge two objects by recursively merging their properties.
 */
export const deepMerge = <T extends Record<string, any>, U extends Record<string, any>>(
  target: T,
  source: U
): T & U => {
  for (const key in source) {
    if (isObject(source[key])) {
      if (isObject(target[key])) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        target[key] = deepMerge({}, source[key]);
      }
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }

  return target as T & U;
};
