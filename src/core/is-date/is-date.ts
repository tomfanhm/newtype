/**
 * Checks if a value is a valid Date object.
 * @param value - The value to be checked.
 * @returns A boolean indicating whether the value is a Date object.
 */
export default function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime())
}
