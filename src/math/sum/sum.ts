/**
 * Calculates the sum of an array of numbers.
 *
 * @param numbers An array of numbers to be summed.
 * @returns The sum of the numbers.
 */
export default function sum(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}
