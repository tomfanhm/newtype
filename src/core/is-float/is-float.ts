import isNumber from "../is-number/is-number"

/**
 * Checks if a value is a floating-point number.
 * @param value The value to check.
 * @returns `true` if the value is a floating-point number, `false` otherwise.
 */
export default function isFloat(value: unknown): value is number {
  return isNumber(value) && !Number.isInteger(value)
}
