import { describe, expect, it } from "vitest"
import replaceAll from "./replace-all"

describe("replaceAll function", () => {
  it("should replace all occurrences of a target string with the replacement string", () => {
    const input = "Hello, world! Hello, everyone!"
    const result = replaceAll(input, "Hello", "Hi")
    expect(result).toBe("Hi, world! Hi, everyone!")
  })

  it("should return the original string if the target string is not found", () => {
    const input = "Hello, world!"
    const result = replaceAll(input, "Goodbye", "Hi")
    expect(result).toBe("Hello, world!")
  })

  it("should replace a target string that appears multiple times in succession", () => {
    const input = "aaa"
    const result = replaceAll(input, "a", "b")
    expect(result).toBe("bbb")
  })

  it("should handle replacing a target string with an empty string", () => {
    const input = "Hello, world!"
    const result = replaceAll(input, "Hello", "")
    expect(result).toBe(", world!")
  })

  it("should handle replacing an empty target string (should return the original string)", () => {
    const input = "Hello, world!"
    const result = replaceAll(input, "", "Hi")
    expect(result).toBe("Hello, world!")
  })

  it("should handle replacing the entire string", () => {
    const input = "Hello"
    const result = replaceAll(input, "Hello", "Hi")
    expect(result).toBe("Hi")
  })

  it("should handle replacing the target string with itself (should return the original string)", () => {
    const input = "Hello, world!"
    const result = replaceAll(input, "world", "world")
    expect(result).toBe("Hello, world!")
  })

  it("should handle replacing the target string with a longer string", () => {
    const input = "abc abc abc"
    const result = replaceAll(input, "abc", "abcdef")
    expect(result).toBe("abcdef abcdef abcdef")
  })

  it("should handle replacing the target string with a shorter string", () => {
    const input = "abcdef abcdef abcdef"
    const result = replaceAll(input, "abcdef", "abc")
    expect(result).toBe("abc abc abc")
  })

  it("should handle a case where the target string is part of the replacement string", () => {
    const input = "abc abc abc"
    const result = replaceAll(input, "abc", "abcabc")
    expect(result).toBe("abcabc abcabc abcabc")
  })

  it("should handle an empty input string", () => {
    const input = ""
    const result = replaceAll(input, "abc", "xyz")
    expect(result).toBe("")
  })

  it("should handle an input string that only consists of the target string", () => {
    const input = "aaa"
    const result = replaceAll(input, "a", "b")
    expect(result).toBe("bbb")
  })

  it("should correctly replace even when the target and replacement are the same length", () => {
    const input = "123 123 123"
    const result = replaceAll(input, "123", "321")
    expect(result).toBe("321 321 321")
  })
})
