import { q1, q3 } from "../quartile/quartile"

/**
 * Calculates the interquartile range (IQR) of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The interquartile range.
 */
export default function iqr(numbers: number[]): number {
  return q3(numbers) - q1(numbers)
}
