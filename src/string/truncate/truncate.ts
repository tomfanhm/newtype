/**
 * Truncates a string to a specified length and appends a tail if necessary.
 *
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @param tail - The tail to append to the truncated string. Default is "...".
 * @returns The truncated string.
 * @throws Error if length is not an integer.
 */
export default function truncate(str: string, length: number, tail: string = "..."): string {
  if (!Number.isInteger(length)) throw new Error("Length must be an integer")
  if (!str) return str
  return str.length > length ? str.slice(0, length) + tail : str
}
