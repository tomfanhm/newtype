/**
 * Checks if the given value is a BigInt.
 *
 * @param value The value to check.
 * @returns `true` if the value is a BigInt, `false` otherwise.
 */
export default function isBigInt(value: unknown): value is number {
  return typeof value === "bigint"
}
