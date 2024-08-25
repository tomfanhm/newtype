import { isFloat } from "@/core/type-guard/type-guard"
import { nCr } from "../combinations-permutations/combinations-permutations"

/**
 * Calculates the hypergeometric distribution.
 *
 * @param N - The population size.
 * @param K - The number of successes in the population.
 * @param n - The sample size.
 * @param k - The number of observed successes in the sample.
 * @returns The probability of observing k successes in a sample of size n, drawn without replacement from a population of size N with K successes.
 * @throws If any of the parameters are negative or not integers, or if K is greater than N, or if n is greater than N, or if k is greater than the smaller of K or n.
 */
export function hypergeometric(N: number, K: number, n: number, k: number): number {
  if (N < 0 || K < 0 || n < 0 || k < 0) throw new Error("All parameters must be non-negative.")
  if (isFloat(N) || isFloat(K) || isFloat(n) || isFloat(k)) throw new Error("All parameters must be integers.")
  if (K > N) throw new Error("Number of successes K cannot be greater than the population size N.")
  if (n > N) throw new Error("Sample size n cannot be greater than the population size N.")
  if (k > K || k > n) throw new Error("Observed successes k cannot be greater than the smaller of K or n.")

  return (nCr(K, k) * nCr(N - K, n - k)) / nCr(N, n)
}
