/**
 * Checks if a value is an object.
 * @param value - The value to be checked.
 * @returns `true` if the value is an object, `false` otherwise.
 */
export default function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null && value.constructor.name === "Object"
}
