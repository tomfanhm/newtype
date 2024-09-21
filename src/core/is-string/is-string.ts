import toType from "../to-type/to-type"

/**
 * Checks if a value is a string.
 * @link https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
 *
 * @param value The value to check.
 * @returns Returns `true` if the value is a string, `false` otherwise.
 */
export default function isString(value: unknown): value is string {
  return toType(value) === "string"
}
