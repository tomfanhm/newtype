const MIN_RUN = 32

function insertionSort<T>(arr: T[], left: number, right: number, compare: (a: T, b: T) => number): void {
  for (let i = left + 1; i <= right; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= left && compare(arr[j], temp) > 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
}

function merge<T>(arr: T[], left: number, mid: number, right: number, compare: (a: T, b: T) => number): void {
  const len1 = mid - left + 1
  const len2 = right - mid
  const leftArr = new Array<T>(len1)
  const rightArr = new Array<T>(len2)

  for (let i = 0; i < len1; i++) {
    leftArr[i] = arr[left + i]
  }
  for (let i = 0; i < len2; i++) {
    rightArr[i] = arr[mid + 1 + i]
  }

  let i = 0,
    j = 0,
    k = left

  while (i < len1 && j < len2) {
    if (compare(leftArr[i], rightArr[j]) <= 0) {
      arr[k++] = leftArr[i++]
    } else {
      arr[k++] = rightArr[j++]
    }
  }

  while (i < len1) {
    arr[k++] = leftArr[i++]
  }

  while (j < len2) {
    arr[k++] = rightArr[j++]
  }
}

/**
 * Sorts an array using the Tim Sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param array The array to be sorted.
 * @param compare A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and 0 if `a` and `b` are equal.
 * @returns The sorted array.
 */
export default function timSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  const clone = [...array]
  const n = clone.length

  for (let i = 0; i < n; i += MIN_RUN) {
    insertionSort(clone, i, Math.min(i + MIN_RUN - 1, n - 1), compare)
  }

  for (let size = MIN_RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1)
      const right = Math.min(left + 2 * size - 1, n - 1)
      if (mid < right) {
        merge(clone, left, mid, right, compare)
      }
    }
  }

  return clone
}
