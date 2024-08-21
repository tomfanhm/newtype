/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param n - The number for which to calculate the factorial.
 * @returns The factorial of the given number.
 * @throws If the number is negative or not an integer.
 */
export default function factorial(n: number): number {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers.")
  if (!Number.isInteger(n)) throw new Error("Factorial is only defined for integers.")
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
