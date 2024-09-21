/**
 * Partitions an array into two separate arrays based on a given callback function.
 * The first array contains elements for which the callback function returns true,
 * and the second array contains elements for which the callback function returns false.
 *
 * @template T The type of elements in the array.
 * @param array The array to be partitioned.
 * @param callback The callback function used to determine whether an element should be included in the first or second array.
 * @returns An array containing two arrays: the first array contains elements for which the callback function returns true, and the second array contains elements for which the callback function returns false.
 */
export default function partition<T>(array: ReadonlyArray<T>, callback: (element: T) => boolean): [T[], T[]] {
  return array.reduce(
    (acc, element) => {
      acc[callback(element) ? 0 : 1].push(element)
      return acc
    },
    [[], []] as [T[], T[]],
  )
}
