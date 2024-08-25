/**
 * Checks if all elements in the array evaluate to true.
 *
 * @template T - The type of elements in the array.
 * @param array - The array to check.
 * @returns True if all elements evaluate to true, false otherwise.
 */
export default function all<T>(array: T[]): boolean {
  return array.every(Boolean)
}
