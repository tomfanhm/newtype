/**
 * Generates a random integer between the specified minimum and maximum values, inclusive.
 *
 * @param min - The minimum value (inclusive).
 * @param max - The maximum value (inclusive).
 * @returns A random integer between min and max.
 * @throws Will throw an error if min is greater than max.
 */
export default function randomInt(min: number, max: number): number {
  if (min > max) throw new Error("min must be less than or equal to max.")
  return Math.floor(Math.random() * (max - min + 1)) + min
}
