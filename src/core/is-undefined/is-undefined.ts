/**
 * Checks if a value is undefined.
 *
 * @param value The value to check.
 * @returns `true` if the value is undefined, `false` otherwise.
 */
export default function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined"
}
