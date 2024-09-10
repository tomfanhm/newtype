/**
 * Sorts an array using the insertion sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param array The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function insertionSort<T>(array: ReadonlyArray<T>, compare: (a: T, b: T) => number): T[] {
  const clone = [...array]
  const n: number = clone.length
  for (let i = 1; i < n; i++) {
    const current: T = clone[i]
    let j: number = i - 1

    while (j >= 0 && compare(clone[j], current) > 0) {
      clone[j + 1] = clone[j]
      j--
    }
    clone[j + 1] = current
  }
  return clone
}
