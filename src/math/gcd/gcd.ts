function getGCD(a: number, b: number): number {
  if (b === 0) {
    return a
  }
  return getGCD(b, a % b)
}

/**
 * Calculates the greatest common divisor (GCD) of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The greatest common divisor of the numbers in the array.
 * @throws If the array has less than 2 elements.
 */
export default function gcd(arr: number[]): number {
  if (arr.length <= 1) throw new Error("Array should have at least 2 elements.")
  return Math.abs(arr.reduce(getGCD))
}
