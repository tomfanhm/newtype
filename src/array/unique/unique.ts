/**
 * Removes duplicate elements from an array.
 *
 * @template T The type of elements in the array.
 * @param array The array to remove duplicates from.
 * @returns A new array with duplicate elements removed.
 */
export default function unique<T>(array: ReadonlyArray<T>): T[] {
  return Array.from(new Set(array))
}
