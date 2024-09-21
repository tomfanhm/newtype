/**
 * Shuffles an array using the Fisher-Yates (aka Knuth) shuffle algorithm.
 * @reference https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 * @template T The type of elements in the array.
 * @param array The array to be shuffled.
 * @returns The shuffled array.
 */
export default function shuffle<T>(array: ReadonlyArray<T>): T[] {
  const clone = array.slice()
  let currentIndex = clone.length
  let randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    const temp = clone[currentIndex]
    clone[currentIndex] = clone[randomIndex]
    clone[randomIndex] = temp
  }

  return clone
}
