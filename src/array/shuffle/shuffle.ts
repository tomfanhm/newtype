/**
 * Shuffles an array using the Fisher-Yates (aka Knuth) shuffle algorithm.
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 * @template T - The type of elements in the array.
 */
export default function shuffle<T>(array: T[]): T[] {
  const clone = array.slice()
  let currentIndex = clone.length
  let randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[clone[currentIndex], clone[randomIndex]] = [clone[randomIndex], clone[currentIndex]]
  }

  return clone
}
