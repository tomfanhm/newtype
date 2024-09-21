import isInteger from "@/core/is-integer/is-integer"

/**
 * Splits an array into chunks of a specified size.
 *
 * @template T The type of elements in the array.
 * @param array The array to be chunked.
 * @param chunkSize The size of each chunk.
 * @returns An array of chunks.
 * @throws If the chunk size is less than or equal to zero or not an integer.
 */
export default function chunk<T>(array: ReadonlyArray<T>, chunkSize: number): T[][] {
  if (chunkSize <= 0) throw new Error("Chunk size must be greater than zero.")
  if (!isInteger(chunkSize)) throw new Error("Chunk size must be an integer.")
  const result: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}
