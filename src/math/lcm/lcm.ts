import any from "@/array/any/any"
import { getGCD } from "../gcd/gcd"

function haveZero(arr: number[]): boolean {
  return any(arr.map((x) => x === 0))
}

/**
 * Calculates the Least Common Multiple (LCM) of an array of numbers.
 *
 * @param arr - An array of numbers. The array should contain at least 2 elements and should not contain 0.
 * @returns The LCM of the numbers in the array.
 * @throws Will throw an error if the array has fewer than 2 elements or contains 0.
 */
export default function lcm(arr: number[]): number {
  if (arr.length <= 1) throw new Error("Array should have at least 2 elements.")
  if (haveZero(arr)) throw new Error("Array should not contain 0.")
  return arr.reduce((acc, curr) => {
    return Math.abs((acc / getGCD(acc, curr)) * curr)
  })
}
