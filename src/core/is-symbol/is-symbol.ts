/**
 * Checks if a value is a symbol.
 *
 * @param value The value to check.
 * @returns `true` if the value is a symbol, `false` otherwise.
 */
export default function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol"
}
