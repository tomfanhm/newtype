import factorial from "../factorial/factorial"

/**
 * Calculates the number of combinations (nCr) for given values of n and r.
 *
 * @param n - The total number of items.
 * @param r - The number of items to be selected.
 * @returns The number of combinations.
 * @throws If n or r is a negative number or not an integer, or if r is greater than n.
 */
export function nCr(n: number, r: number): number {
  if (n < 0 || r < 0) throw new Error("n and r must be non-negative integers.")
  if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error("n and r must be integers.")
  if (r > n) throw new Error("r must not be greater than n.")
  return factorial(n) / (factorial(r) * factorial(n - r))
}

/**
 * Calculates the number of permutations of n items taken r at a time.
 *
 * @param n - The total number of items.
 * @param r - The number of items taken at a time.
 * @returns The number of permutations.
 * @throws If n or r is a negative number or not an integer, or if r is greater than n.
 */
export function nPr(n: number, r: number): number {
  if (n < 0 || r < 0) throw new Error("n and r must be non-negative integers.")
  if (!Number.isInteger(n) || !Number.isInteger(r)) throw new Error("n and r must be integers.")
  if (r > n) throw new Error("r must not be greater than n.")
  return factorial(n) / factorial(n - r)
}
