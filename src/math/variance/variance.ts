import mean from "../mean/mean"

/**
 * Calculates the variance of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @param isSample - Optional. Specifies whether the array represents a sample or a population. Default is true (sample).
 * @returns The variance of the numbers, or undefined if the array is empty or contains only one element (for sample variance).
 */
export default function variance(numbers: number[], isSample: boolean = true): number | undefined {
  if (numbers.length === 0 || (isSample && numbers.length === 1)) return undefined

  const mu = mean(numbers)
  if (mu === undefined) return undefined

  return numbers.reduce((acc, val) => acc + (val - mu) ** 2, 0) / (numbers.length - (isSample ? 1 : 0))
}
