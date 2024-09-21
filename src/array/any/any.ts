/**
 * Checks if any element in the array is truthy.
 *
 * @template T The type of elements in the array.
 * @param array The array to check.
 * @returns True if any element in the array is truthy, false otherwise.
 */
export default function any<T>(array: ReadonlyArray<T>): boolean {
  return array.some(Boolean)
}
