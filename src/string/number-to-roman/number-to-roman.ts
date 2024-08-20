/**
 * Converts a number to its Roman numeral representation.
 * @param num - The number to convert.
 * @returns The Roman numeral representation of the input number.
 * @throws If the input is not a valid integer or is outside the range of 1 to 3999.
 */
export default function numberToRoman(num: number): string {
  if (!Number.isInteger(num) || Number.isNaN(num)) {
    throw new Error("Invalid input. Number must be an integer.")
  }
  if (num < 1 || num > 3999) throw new Error("Invalid input. Number must be between 1 and 3999.")

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  let roman = ""
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += numerals[i]
      num -= values[i]
    }
  }
  return roman
}
