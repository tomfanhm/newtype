/**
 * Capitalizes the first letter of each word in a string, excluding specified stopwords.
 * @param input - The input string to capitalize.
 * @param stopwords - An optional array of stopwords to exclude from capitalization.
 * @returns The capitalized string.
 */
export default function capitalize(input: string, stopwords: string[] = []): string {
  const stopwordSet = new Set(stopwords.map((word) => word.toLowerCase()))

  return input
    .split(" ")
    .map((word) => word.trim()) // Remove leading/trailing whitespace
    .filter(Boolean) // Remove empty strings
    .map((word) => {
      if (stopwordSet.has(word.toLowerCase())) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
    })
    .join(" ")
}
