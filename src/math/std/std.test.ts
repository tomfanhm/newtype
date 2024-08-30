import { describe, expect, it } from "vitest"
import std from "./std"

describe("std function", () => {
  it("should throw an error when the array is empty", () => {
    expect(() => std([])).toThrow("The array is empty.")
  })

  it("should throw an error when the array contains only one number and isSample is true", () => {
    expect(() => std([5], true)).toThrow("The array must contain more than one element for sample standard deviation.")
  })

  it("should return 0 for an array with one element if isSample is false", () => {
    expect(std([5], false)).toBe(0)
  })

  it("should calculate the standard deviation for an array of integers (sample)", () => {
    const result = std([1, 2, 3], true)
    expect(result).toBeCloseTo(1, 4)
  })

  it("should calculate the standard deviation for an array of integers (population)", () => {
    const result = std([1, 2, 3], false)
    expect(result).toBeCloseTo(0.81649658092773, 4)
  })

  it("should calculate the standard deviation for an array of floats (sample)", () => {
    const result = std([1.5, 2.5, 3.5], true)
    expect(result).toBeCloseTo(1, 4)
  })

  it("should calculate the standard deviation for an array of floats (population)", () => {
    const result = std([1.5, 2.5, 3.5], false)
    expect(result).toBeCloseTo(0.81649658092773, 4)
  })

  it("should calculate the standard deviation for an array with a mix of integers and floats (sample)", () => {
    const result = std([1, 2.5, 4, 8.5], true)
    expect(result).toBeCloseTo(3.2403703492039, 4)
  })

  it("should calculate the standard deviation for an array with a mix of integers and floats (population)", () => {
    const result = std([1, 2.5, 4, 8.5], false)
    expect(result).toBeCloseTo(2.8062430400805, 4)
  })
})
