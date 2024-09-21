/**
 * Finds the index of the first element in the array that satisfies the provided testing function.
 *
 * @template T The type of elements in the array.
 * @param arr The array to search within.
 * @param predicate The function to test each element.
 * @returns The index of the first element that satisfies the testing function; otherwise, -1.
 */
export default function findIndex<T>(arr: ReadonlyArray<T>, predicate: (item: T) => boolean): number {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return i
  }
  return -1
}
