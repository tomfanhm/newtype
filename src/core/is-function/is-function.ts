/**
 * Checks if a value is a function.
 *
 * @param value The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function isFunction(value: unknown): value is Function {
  return typeof value === "function"
}
