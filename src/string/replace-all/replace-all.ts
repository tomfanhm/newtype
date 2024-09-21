/**
 * Replaces all occurrences of a target string with a replacement string in the input string.
 * @param input The input string.
 * @param target The target string to be replaced.
 * @param replacement The replacement string.
 * @returns The input string with all occurrences of the target string replaced by the replacement string.
 */
export default function replaceAll(input: string, target: string, replacement: string): string {
  if (target === "") return input
  return input.split(target).join(replacement)
}
