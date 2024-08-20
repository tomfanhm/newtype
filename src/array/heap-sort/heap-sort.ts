/**
 * Sorts an array using the Heap Sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param arr The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function heapSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...arr]
  let n = clone.length
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(clone, n, i, compare)
  for (let i = n - 1; i > 0; i--) {
    swap(clone, 0, i)
    heapify(clone, i, 0, compare)
  }

  return clone
}

function heapify<T>(arr: T[], n: number, i: number, compare: (a: T, b: T) => number): void {
  let largest = i
  let l = 2 * i + 1
  let r = 2 * i + 2
  if (l < n && compare(arr[l], arr[largest]) > 0) largest = l
  if (r < n && compare(arr[r], arr[largest]) > 0) largest = r
  if (largest != i) {
    swap(arr, i, largest)
    heapify(arr, n, largest, compare)
  }
}

function swap<T>(arr: T[], i: number, j: number): void {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
