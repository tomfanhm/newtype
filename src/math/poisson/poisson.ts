import isInteger from "@/core/is-integer/is-integer"
import factorial from "../factorial/factorial"

/**
 * Calculates the probability mass function value of the Poisson distribution.
 *
 * @param lambda The average rate of events occurring per unit of time.
 * @param k The number of events to calculate the probability for.
 * @returns The probability mass function value.
 * @throws If lambda is negative.
 * @throws If k is negative.
 * @throws If k is not an integer.
 */
export default function poisson(lambda: number, k: number): number {
  if (!isInteger(k)) throw new Error("k must be an integer.")
  if (lambda < 0) throw new Error("Lambda must be non-negative.")
  if (k < 0) throw new Error("k must be non-negative.")
  const e = Math.exp(-lambda)
  const lambdaPowK = Math.pow(lambda, k)
  return (e * lambdaPowK) / factorial(k)
}
