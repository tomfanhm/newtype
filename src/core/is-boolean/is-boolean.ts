/**
 * Checks if the given value is a boolean.
 *
 * @param value The value to be checked.
 * @returns `true` if the value is a boolean, `false` otherwise.
 */
export default function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean"
}
