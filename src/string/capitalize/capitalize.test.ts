import { describe, it, expect } from "vitest"
import capitalize from "./capitalize"

describe("capitalize function", () => {
  it("should capitalize all words in a basic sentence", () => {
    expect(capitalize("this is a test")).toBe("This Is A Test")
  })

  it("should not capitalize stopwords", () => {
    expect(capitalize("this is a test", ["is", "a"])).toBe("This is a Test")
  })

  it("should handle mixed case input correctly", () => {
    expect(capitalize("tHiS is a TeST")).toBe("This Is A Test")
  })

  it("should return an empty string if input is empty", () => {
    expect(capitalize("")).toBe("")
  })

  it("should correctly handle a string with all stopwords", () => {
    expect(capitalize("this is a test", ["this", "is", "a", "test"])).toBe("this is a test")
  })

  it("should handle punctuation correctly", () => {
    expect(capitalize("hello, world! this is a test.", ["is", "a"])).toBe("Hello, World! This is a Test.")
  })

  it("should handle stopwords case insensitively", () => {
    expect(capitalize("The quick brown fox", ["the", "quick"])).toBe("The quick Brown Fox")
    expect(capitalize("the QUICK brown FOX", ["the", "quick"])).toBe("the QUICK Brown Fox")
  })

  it("should capitalize single word input if it is not a stopword", () => {
    expect(capitalize("hello")).toBe("Hello")
    expect(capitalize("HELLO")).toBe("Hello")
  })

  it("should handle multiple spaces between words", () => {
    expect(capitalize("this is a  test")).toBe("This Is A Test")
  })
})
