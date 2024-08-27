import { nCr } from "../arrangements/arrangements"

/**
 * Calculates the binomial coefficient using the formula nCk * p^k * (1 - p)^(n - k).
 *
 * @param n - The total number of trials.
 * @param k - The number of successful trials.
 * @param p - The probability of success in each trial.
 * @returns The calculated binomial coefficient.
 * @throws If the values for n, k, or p are invalid.
 */
export default function binomial(n: number, k: number, p: number): number {
  if (n < 0 || k < 0 || k > n) throw new Error("Invalid values for n or k. Ensure that 0 <= k <= n.")
  if (p < 0 || p > 1) throw new Error("Probability p must be between 0 and 1.")
  return nCr(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
}
