/**
 * Splits an array into chunks of a specified size.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to split into chunks.
 * @param chunkSize - The size of each chunk.
 * @returns An array of chunks, where each chunk is an array of elements from the original array.
 * @throws If the chunk size is less than or equal to zero.
 */
export default function chunks<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than zero.")
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    result.push(chunk)
  }
  return result
}
