import { isNumber } from "@/core"

/**
 * Generates an array of numbers within a specified range.
 *
 * @param start The starting number of the range.
 * @param end The ending number of the range.
 * @param step The increment or decrement value. Default is 1.
 * @returns An array of numbers within the specified range.
 * @throws Error if the step value is zero.
 * @throws Error if the start, end, or step values are not numbers.
 */
export default function range(start: number, end: number, step: number = 1): number[] {
  if (!isNumber(start) || !isNumber(end) || !isNumber(step)) throw new Error("Start, end, and step must be numbers.")
  if (step === 0) throw new Error("Step cannot be zero.")

  const result: number[] = []
  const stepping = step > 0 ? (x: number) => x < end : (x: number) => x > end

  for (let i = start; stepping(i); i += step) {
    result.push(i)
  }

  return result
}
