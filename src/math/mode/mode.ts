/**
 * Calculates the mode(s) of an array of numbers.
 * The mode is the value(s) that appear most frequently in the array.
 * If there are multiple modes, all of them will be returned.
 * @param numbers - An array of numbers.
 * @returns An array of mode(s) from the input array.
 * @throws If the input array is empty.
 */
export default function mode(numbers: number[]): number[] {
  if (numbers.length === 0) throw new Error("The array is empty.")

  const frequency: Record<number, number> = {}
  let maxFreq = 0
  const modes: number[] = []

  numbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1
    maxFreq = Math.max(maxFreq, frequency[num])
  })

  for (const num in frequency) {
    if (frequency[num] === maxFreq) {
      modes.push(Number(num))
    }
  }

  return modes
}
