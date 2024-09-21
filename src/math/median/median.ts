/**
 * Calculates the median value of an array of numbers.
 *
 * @param numbers The array of numbers.
 * @returns The median value of the array.
 * @throws If the array is empty.
 */
export default function median(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("The array is empty.")
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  const midIndex = Math.floor(sortedNumbers.length / 2)
  return sortedNumbers.length % 2 === 0
    ? (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2
    : sortedNumbers[midIndex]
}
