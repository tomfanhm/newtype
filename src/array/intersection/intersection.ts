/**
 * Returns an array containing the intersection of two arrays.
 *
 * @template T - The type of the elements in the arrays.
 * @param array1 - The first array.
 * @param array2 - The second array.
 * @returns The intersection of the two arrays.
 */
export default function intersection<T>(array1: T[], array2: T[]): T[] {
  const set1 = new Set(array1)
  const set2 = new Set(array2)
  return [...set1].filter((item) => set2.has(item))
}
