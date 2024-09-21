/**
 * Capitalizes the first character of the given string.
 *
 * @param str The string to be capitalized.
 * @returns The capitalized string with the first character in uppercase.
 */
export default function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
