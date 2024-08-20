/**
 * Removes null and undefined values from an array.
 *
 * @template T The type of elements in the array.
 * @param arr The array to compact.
 * @returns A new array with null and undefined values removed.
 */
export default function compact<T>(arr: T[]): NonNullable<T>[] {
  return arr.flatMap((f) => (f ? [f] : []))
}
