/**
 * Calculates the median of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The median value of the array, or undefined if the array is empty.
 */
export default function median(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined
  }
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  const midIndex = Math.floor(sortedNumbers.length / 2)
  return sortedNumbers.length % 2 === 0
    ? (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2
    : sortedNumbers[midIndex]
}
