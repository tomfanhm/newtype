import { describe, expect, it } from "vitest"
import capitalize from "./capitalize"

describe("capitalize function", () => {
  it("should capitalize the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello")
  })

  it("should return an empty string when input is empty", () => {
    expect(capitalize("")).toBe("")
  })

  it("should capitalize a single lowercase character", () => {
    expect(capitalize("a")).toBe("A")
  })

  it("should return the same character if it is already uppercase", () => {
    expect(capitalize("A")).toBe("A")
  })

  it("should not change the first character if it is not a letter", () => {
    expect(capitalize("1hello")).toBe("1hello")
    expect(capitalize("-hello")).toBe("-hello")
  })

  it("should return the same string if the first character is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello")
  })

  it("should only capitalize the first character of the first word", () => {
    expect(capitalize("hello world")).toBe("Hello world")
  })

  it("should not affect the casing of characters other than the first one", () => {
    expect(capitalize("hELLO")).toBe("HELLO")
  })

  it("should handle strings that start with special characters", () => {
    expect(capitalize("$hello")).toBe("$hello")
    expect(capitalize("!hello")).toBe("!hello")
  })

  it("should capitalize the first letter if it is a lowercase unicode letter", () => {
    expect(capitalize("éclair")).toBe("Éclair")
    expect(capitalize("österreich")).toBe("Österreich")
  })
})
