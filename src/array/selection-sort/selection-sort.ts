/**
 * Sorts an array using the selection sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param arr The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function selectionSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...arr]
  const n: number = clone.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex: number = i
    for (let j = i + 1; j < n; j++) {
      if (compare(clone[j], clone[minIndex]) < 0) {
        minIndex = j
      }
    }

    const temp: T = clone[minIndex]
    clone[minIndex] = clone[i]
    clone[i] = temp
  }
  return clone
}
