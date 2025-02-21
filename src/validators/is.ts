export function isNumber<T extends number>(
  value: T | unknown,
): value is number {
  return Object.prototype.toString.call(value) === '[object Number]';
}

export function isString<T extends string>(
  value: T | unknown,
): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}

export function isNotEmptyString(value: any): boolean {
  return typeof value === 'string' && value.length > 0;
}

export function isBoolean<T extends boolean>(
  value: T | unknown,
): value is boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

export function isFunction<T extends (...args: any[]) => any | void | never>(
  value: T | unknown,
): value is T {
  return Object.prototype.toString.call(value) === '[object Function]';
}

export const isInvalidDate = (d?: string | number | Date): boolean => {
  if (typeof d === 'undefined') return true;
  if (new Date(d).toString() === 'Invalid Date') return true;
  return false;
};

const CNF_PROP_VOLUME_YES = ['1', 1, 'on', 'y', 'yes', 'true', true];

export const isConfigYes = (v: string | number | boolean) =>
  CNF_PROP_VOLUME_YES.includes(v) ||
  CNF_PROP_VOLUME_YES.includes(String(v).toLocaleLowerCase());
