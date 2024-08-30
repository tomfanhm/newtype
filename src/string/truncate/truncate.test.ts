import { describe, expect, it } from "vitest"
import truncate from "./truncate"

describe("truncate function", () => {
  it('should truncate the string and append the default tail "..."', () => {
    expect(truncate("Hello, world!", 5)).toBe("Hello...")
  })

  it("should truncate the string and append a custom tail", () => {
    expect(truncate("Hello, world!", 5, "---")).toBe("Hello---")
  })

  it("should return the original string if it is shorter than the specified length", () => {
    expect(truncate("Hi", 5)).toBe("Hi")
  })

  it("should return the original string if it is exactly the specified length", () => {
    expect(truncate("Hello", 5)).toBe("Hello")
  })

  it("should return an empty string if the input string is empty", () => {
    expect(truncate("", 5)).toBe("")
  })

  it("should throw an error if the length is not an integer", () => {
    expect(() => truncate("Hello, world!", 5.5)).toThrow("Length must be an integer.")
    expect(() => truncate("Hello, world!", NaN)).toThrow("Length must be an integer.")
  })

  it("should handle negative lengths", () => {
    expect(truncate("Hello, world!", -5)).toBe("Hello, w...")
    expect(truncate("Hello, world!", -5, "---")).toBe("Hello, w---")
  })

  it("should handle tail being an empty string", () => {
    expect(truncate("Hello, world!", 5, "")).toBe("Hello")
  })

  it("should return the entire string if the length is set to the string length", () => {
    expect(truncate("Hello", 5)).toBe("Hello")
  })

  it("should handle length being zero", () => {
    expect(truncate("Hello, world!", 0)).toBe("...")
    expect(truncate("Hello, world!", 0, "---")).toBe("---")
  })
})
