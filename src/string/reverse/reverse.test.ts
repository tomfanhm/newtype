import { describe, it, expect } from "vitest"
import reverse from "./reverse"

describe("reverse function", () => {
  it("should reverse a regular string", () => {
    expect(reverse("hello")).toBe("olleh")
  })

  it("should return an empty string when the input is an empty string", () => {
    expect(reverse("")).toBe("")
  })

  it("should return the same string when the input is a single character", () => {
    expect(reverse("a")).toBe("a")
  })

  it("should reverse a string with spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh")
  })

  it("should reverse a string with special characters", () => {
    expect(reverse("!@#$%^&*()")).toBe(")(*&^%$#@!")
  })

  it("should reverse a string with numbers", () => {
    expect(reverse("12345")).toBe("54321")
  })

  it("should reverse a palindrome correctly", () => {
    expect(reverse("madam")).toBe("madam")
  })

  it("should reverse a string with mixed case letters", () => {
    expect(reverse("Hello")).toBe("olleH")
  })

  it("should reverse a string with unicode characters", () => {
    expect(reverse("こんにちは")).toBe("はちにんこ")
  })
})
