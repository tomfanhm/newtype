/**
 * Converts a value to its type as a string.
 *
 * @param value - The value to convert.
 * @returns The type of the value as a string.
 */
export default function toType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
