/**
 * Checks if a string is a valid UUID.
 * @param str - The string to be checked.
 * @returns A boolean indicating whether the string is a valid UUID.
 */
export default function isUUID(str: string): boolean {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return regex.test(str)
}
