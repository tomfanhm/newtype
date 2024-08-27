/**
 * Generates all possible permutations of an array.
 * @link https://stackoverflow.com/questions/9960908/permutations-in-javascript
 *
 * @template T - The type of elements in the array.
 * @param array - The array to generate permutations from.
 * @returns An array of arrays containing all possible permutations.
 */
export default function permutations<T>(array: T[]): T[][] {
  const results: T[][] = []
  function helper(arr: T[], memo: T[]) {
    for (let i = 0; i < arr.length; i++) {
      const current = arr.splice(i, 1)
      if (arr.length === 0) {
        results.push(memo.concat(current))
      }
      helper(arr.slice(), memo.concat(current))
      arr.splice(i, 0, current[0])
    }
  }
  helper(array, [])
  return results
}
