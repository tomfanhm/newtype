type CaseType = "camelCase" | "PascalCase" | "snake_case" | "kebab-case" | "SCREAMING_SNAKE_CASE" | "Train-Case"

/**
 * Converts a string from one case type to another.
 *
 * @param input - The input string to be converted.
 * @param inputType - The case type of the input string. Can be one of:
 *   - "camelCase"
 *   - "PascalCase"
 *   - "snake_case"
 *   - "SCREAMING_SNAKE_CASE"
 *   - "kebab-case"
 *   - "Train-Case"
 * @param outputType - The desired case type for the output string. Can be one of the same values as `inputType`.
 * @returns The converted string in the specified output case type.
 */
export default function convertCase(input: string, inputType: CaseType, outputType: CaseType): string {
  // Helper to capitalize the first letter of a word
  const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  // Helper to split string according to case type
  const splitString = (str: string, type: CaseType): string[] => {
    switch (type) {
      case "camelCase":
      case "PascalCase":
        // Matches any occurrence where a lowercase letter ([a-z]) is immediately followed by an uppercase letter ([A-Z]).
        return str.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ")
      case "snake_case":
      case "SCREAMING_SNAKE_CASE":
        return str.split("_")
      case "kebab-case":
        return str.split("-")
      case "Train-Case":
        return str.split("-")
      default:
        return str.split(" ")
    }
  }

  // Helper to join string array to the specified case type
  const joinString = (words: string[], type: CaseType): string => {
    switch (type) {
      case "camelCase":
        return words.map((word, index) => (index === 0 ? word.toLowerCase() : capitalize(word))).join("")
      case "PascalCase":
        return words.map(capitalize).join("")
      case "snake_case":
        return words.join("_").toLowerCase()
      case "kebab-case":
        return words.join("-").toLowerCase()
      case "SCREAMING_SNAKE_CASE":
        return words.join("_").toUpperCase()
      case "Train-Case":
        return words.map(capitalize).join("-")
      default:
        return words.join("")
    }
  }

  return joinString(splitString(input, inputType), outputType)
}
