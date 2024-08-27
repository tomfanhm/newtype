import mean from "../mean/mean"

/**
 * Calculates the variance of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @param isSample - Optional. Specifies whether the array represents a sample. Default is true.
 * @returns The variance of the array of numbers.
 * @throws If the array is empty.
 * @throws If the array contains only one element and isSample is true.
 */
export default function variance(numbers: number[], isSample: boolean = true): number {
  if (numbers.length === 0) throw new Error("The array is empty.")
  if (isSample && numbers.length === 1)
    throw new Error("The array must contain more than one element for sample variance.")
  const mu = mean(numbers)
  return numbers.reduce((acc, val) => acc + (val - mu) ** 2, 0) / (numbers.length - (isSample ? 1 : 0))
}
