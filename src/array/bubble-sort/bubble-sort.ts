/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param array The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function bubbleSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...array]
  let n: number = clone.length
  let swapped: boolean
  do {
    swapped = false
    for (let i = 1; i < n; i++) {
      if (compare(clone[i - 1], clone[i]) > 0) {
        const temp: T = clone[i - 1]
        clone[i - 1] = clone[i]
        clone[i] = temp
        swapped = true
      }
    }
    // Decrease 'n' because the last element is already in its correct position
    n--
  } while (swapped)
  return clone
}
