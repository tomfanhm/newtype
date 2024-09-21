import isInteger from "@/core/is-integer/is-integer"
import shuffle from "../shuffle/shuffle"

/**
 * Returns a sample of elements from an array.
 *
 * @template T The type of elements in the array.
 * @param array The array to sample from.
 * @param count The number of elements to sample. Defaults to 1.
 * @returns An array containing the sampled elements.
 * @throws If count is less than or equal to 0 or not an integer.
 */
export default function sample<T>(array: ReadonlyArray<T>, count: number = 1): T[] {
  if (!isInteger(count)) throw new Error("Count must be an integer.")
  if (count <= 0) throw new Error("Count must be greater than 0.")
  const shuffled = shuffle(array)
  return shuffled.slice(0, count)
}
