import sum from "../sum/sum"

/**
 * Calculates the mean (average) of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The mean of the numbers.
 * @throws If the array is empty.
 */
export default function mean(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("The array is empty.")
  return sum(numbers) / numbers.length
}
