import isNumber from "../is-number/is-number"

/**
 * Checks if a value is an integer.
 * @param value The value to check.
 * @returns True if the value is an integer, false otherwise.
 */
export default function isInteger(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value)
}
