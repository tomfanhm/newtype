/**
 * Checks if the given value is a number.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a number, `false` otherwise.
 */
export default function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value) && isFinite(value)
}
