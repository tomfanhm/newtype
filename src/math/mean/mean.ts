import sum from "../sum/sum"

/**
 * Calculates the mean (average) of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The mean of the numbers, or undefined if the array is empty.
 */
export default function mean(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined
  }
  return sum(numbers) / numbers.length
}
