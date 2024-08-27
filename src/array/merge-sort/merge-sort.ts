export function merge<T>(arr: T[], l: number, m: number, r: number, compare: (a: T, b: T) => number): void {
  const n1 = m - l + 1
  const n2 = r - m

  const L: T[] = new Array(n1)
  const R: T[] = new Array(n2)

  for (let i = 0; i < n1; i++) L[i] = arr[l + i]
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j]

  let i = 0
  let j = 0
  let k = l
  while (i < n1 && j < n2) {
    if (compare(L[i], R[j]) <= 0) {
      arr[k] = L[i]
      i++
    } else {
      arr[k] = R[j]
      j++
    }
    k++
  }

  while (i < n1) {
    arr[k] = L[i]
    i++
    k++
  }

  while (j < n2) {
    arr[k] = R[j]
    j++
    k++
  }
}

function recursiveMergeSort<T>(arr: T[], l: number, r: number, compare: (a: T, b: T) => number): void {
  if (l >= r) {
    return
  }
  const m = l + Math.floor((r - l) / 2)
  recursiveMergeSort(arr, l, m, compare)
  recursiveMergeSort(arr, m + 1, r, compare)
  merge(arr, l, m, r, compare)
}

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param array The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function mergeSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...array]
  recursiveMergeSort(clone, 0, clone.length - 1, compare)
  return clone
}
