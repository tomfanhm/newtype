/**
 * Sorts an array using the quicksort algorithm.
 *
 * @template T The type of elements in the array.
 * @param arr The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function quickSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...arr]

  function quickSortRecursive(clone: T[], low: number, high: number): void {
    if (low < high) {
      const pi = partition(clone, low, high)
      quickSortRecursive(clone, low, pi - 1)
      quickSortRecursive(clone, pi + 1, high)
    }
  }

  function partition(clone: T[], low: number, high: number): number {
    const pivot: T = clone[high]
    let i = low - 1

    for (let j = low; j <= high - 1; j++) {
      if (compare(clone[j], pivot) <= 0) {
        i++
        swap(clone, i, j)
      }
    }
    swap(clone, i + 1, high)
    return i + 1
  }

  function swap(clone: T[], i: number, j: number): void {
    const temp = clone[i]
    clone[i] = clone[j]
    clone[j] = temp
  }

  quickSortRecursive(clone, 0, clone.length - 1)
  return clone
}
