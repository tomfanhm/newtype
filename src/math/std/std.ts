import variance from "../variance/variance"

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param numbers The array of numbers.
 * @param isSample Optional. Specifies whether the array represents a sample or the entire population. Default is true.
 * @returns The standard deviation of the numbers.
 * @throws If the array is empty.
 * @throws If the array has only one element and isSample is true.
 */
export default function std(numbers: number[], isSample: boolean = true): number {
  if (numbers.length === 0) throw new Error("The array is empty.")
  if (isSample && numbers.length === 1)
    throw new Error("The array must contain more than one element for sample standard deviation.")
  return Math.sqrt(variance(numbers, isSample))
}
