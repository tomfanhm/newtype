import variance from "../variance/variance"

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @param isSample - Optional. Specifies whether the array represents a sample or the entire population. Default is true.
 * @returns The standard deviation of the numbers, or undefined if the array is empty or contains only one element (for sample standard deviation).
 */
export default function std(numbers: number[], isSample: boolean = true): number | undefined {
  const val = variance(numbers, isSample)
  return val !== undefined ? Math.sqrt(val) : undefined
}
