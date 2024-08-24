/**
 * Checks if a string is a valid UUID.
 * @param str - The string to be checked.
 * @returns A boolean indicating whether the string is a valid UUID.
 */
export default function isUUID(str: string): boolean {
  // The pattern is structured as follows:
  // - `^[0-9a-f]{8}-`: Requires the first segment to consist of 8 hexadecimal digits.
  // - `[0-9a-f]{4}-`: The second segment must have 4 hexadecimal digits.
  // - `[1-5][0-9a-f]{3}-`: The third segment starts with a version number (1-5), followed by 3 hexadecimal digits.
  // - `[89ab][0-9a-f]{3}-`: The fourth segment starts with a variant (8, 9, a, or b), followed by 3 hexadecimal digits.
  // - `[0-9a-f]{12}$`: The final segment should have 12 hexadecimal digits.
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return regex.test(str)
}
