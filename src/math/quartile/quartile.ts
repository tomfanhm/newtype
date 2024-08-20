/**
 * Calculates the quartile value of an array of numbers.
 * @param numbers - The array of numbers.
 * @param quartile - The quartile value to calculate (0.25, 0.5, 0.75, or 1).
 * @returns The quartile value.
 * @throws An error if the array contains less than 4 elements.
 */
function calculateQuartile(numbers: number[], quartile: 0.25 | 0.5 | 0.75 | 1): number {
  if (numbers.length < 4) throw new Error("The array must contain at least 4 elements")
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)
  const pos = (sortedNumbers.length - 1) * quartile
  if (pos % 1 === 0) return sortedNumbers[pos]
  const lowerIndex = Math.floor(pos)
  const upperIndex = Math.ceil(pos)
  return (sortedNumbers[lowerIndex] + sortedNumbers[upperIndex]) / 2
}

/**
 * Calculates the first quartile (Q1) of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The first quartile (Q1) value.
 */
function q1(numbers: number[]): number {
  return calculateQuartile(numbers, 0.25)
}

/**
 * Calculates the second quartile (Q2) of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The second quartile (Q2) value.
 */
function q2(numbers: number[]): number {
  return calculateQuartile(numbers, 0.5)
}

/**
 * Calculates the third quartile (Q3) of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The third quartile (Q3) value.
 */
function q3(numbers: number[]): number {
  return calculateQuartile(numbers, 0.75)
}

/**
 * Calculates the fourth quartile of an array of numbers.
 *
 * @param numbers - The array of numbers.
 * @returns The fourth quartile value.
 */
function q4(numbers: number[]): number {
  return calculateQuartile(numbers, 1)
}

export { q1, q2, q3, q4 }
