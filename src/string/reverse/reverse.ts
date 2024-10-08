/**
 * Reverses a given string.
 *
 * @param str The string to be reversed.
 * @returns The reversed string.
 */
export default function reverse(str: string): string {
  return str.split("").reverse().join("")
}
