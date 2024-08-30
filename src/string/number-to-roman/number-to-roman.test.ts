import { describe, expect, it } from "vitest"
import numberToRoman from "./number-to-roman"

describe("numberToRoman function", () => {
  it("should correctly convert numbers within the valid range to Roman numerals", () => {
    expect(numberToRoman(1)).toBe("I")
    expect(numberToRoman(4)).toBe("IV")
    expect(numberToRoman(9)).toBe("IX")
    expect(numberToRoman(58)).toBe("LVIII")
    expect(numberToRoman(1994)).toBe("MCMXCIV")
    expect(numberToRoman(3999)).toBe("MMMCMXCIX")
  })

  it("should throw an error for numbers less than 1", () => {
    expect(() => numberToRoman(0)).toThrow("Invalid input. Number must be between 1 and 3999.")
    expect(() => numberToRoman(-1)).toThrow("Invalid input. Number must be between 1 and 3999.")
  })

  it("should throw an error for numbers greater than 3999", () => {
    expect(() => numberToRoman(4000)).toThrow("Invalid input. Number must be between 1 and 3999.")
  })

  it("should correctly handle the edge cases of 1 and 3999", () => {
    expect(numberToRoman(1)).toBe("I")
    expect(numberToRoman(3999)).toBe("MMMCMXCIX")
  })

  it("should throw an error for non-integer values", () => {
    expect(() => numberToRoman(3.5)).toThrow("Invalid input. Number must be an integer.")
    expect(() => numberToRoman(NaN)).toThrow("Invalid input. Number must be an integer.")
  })
})
