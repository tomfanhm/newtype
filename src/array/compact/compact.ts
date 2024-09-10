/**
 * Removes null and undefined values from an array.
 *
 * @template T The type of elements in the array.
 * @param array The array to compact.
 * @returns A new array with null and undefined values removed.
 */
export default function compact<T>(array: ReadonlyArray<T>): NonNullable<T>[] {
  return array.flatMap((f) => (f ? [f] : []))
}
