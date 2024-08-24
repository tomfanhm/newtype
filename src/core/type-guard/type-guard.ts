/**
 * Checks if a value is a string.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a string, `false` otherwise.
 */
export function isString(value: unknown): value is string {
  return typeof value === "string"
}

/**
 * Checks if the given value is a number.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a number, `false` otherwise.
 */
export function isNumber(value: unknown): boolean {
  return typeof value === "number"
}

/**
 * Checks if the given value is a BigInt.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a BigInt, `false` otherwise.
 */
export function isBigInt(value: unknown): boolean {
  return typeof value === "bigint"
}

/**
 * Checks if the given value is a boolean.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a boolean, `false` otherwise.
 */
export function isBoolean(value: unknown): boolean {
  return typeof value === "boolean"
}

/**
 * Checks if a value is undefined.
 *
 * @param value - The value to check.
 * @returns `true` if the value is undefined, `false` otherwise.
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined"
}

/**
 * Checks if a value is null.
 *
 * @param value - The value to check.
 * @returns `true` if the value is null, `false` otherwise.
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Checks if a value is a symbol.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a symbol, `false` otherwise.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol"
}

/**
 * Checks if a value is an object.
 * @param value - The value to be checked.
 * @returns `true` if the value is an object, `false` otherwise.
 */
export function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null && value.constructor.name === "Object"
}

/**
 * Checks if a value is an array.
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value)
}

/**
 * Checks if a value is a function.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(value: unknown): value is Function {
  return typeof value === "function"
}

/**
 * Checks if a value is an integer.
 * @param value - The value to check.
 * @returns True if the value is an integer, false otherwise.
 */
export function isInteger(value: unknown): value is number {
  return Number.isInteger(value)
}

/**
 * Checks if a value is a floating-point number.
 * @param value - The value to check.
 * @returns `true` if the value is a floating-point number, `false` otherwise.
 */
export function isFloat(value: unknown): value is number {
  return Number.isFinite(value) && !Number.isInteger(value)
}

/**
 * Checks if a value is a valid Date object.
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a Date object.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime())
}

/**
 * Checks if a value is an instance of Error.
 * @param value - The value to check.
 * @returns True if the value is an instance of Error, false otherwise.
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error
}
