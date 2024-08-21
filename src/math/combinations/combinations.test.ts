import { describe, it, expect } from "vitest"
import { nCr, nPr } from "./combinations"

describe("combinations functions", () => {
  describe("nCr function", () => {
    it("should return the correct number of combinations for valid inputs", () => {
      expect(nCr(5, 3)).toBe(10) // 5C3 = 10
      expect(nCr(6, 2)).toBe(15) // 6C2 = 15
      expect(nCr(10, 0)).toBe(1) // 10C0 = 1
      expect(nCr(10, 10)).toBe(1) // 10C10 = 1
    })

    it("should throw an error if n or r is negative", () => {
      expect(() => nCr(-5, 3)).toThrow("n and r must be non-negative integers.")
      expect(() => nCr(5, -3)).toThrow("n and r must be non-negative integers.")
    })

    it("should throw an error if n or r is not an integer", () => {
      expect(() => nCr(5.5, 3)).toThrow("n and r must be integers.")
      expect(() => nCr(5, 3.2)).toThrow("n and r must be integers.")
    })

    it("should throw an error if r is greater than n", () => {
      expect(() => nCr(3, 5)).toThrow("r must not be greater than n.")
    })

    it("should handle edge cases where r equals 0 or n", () => {
      expect(nCr(7, 0)).toBe(1) // nC0 = 1
      expect(nCr(7, 7)).toBe(1) // nCn = 1
    })

    it("should handle large values correctly", () => {
      expect(nCr(20, 10)).toBe(184756) // 20C10 = 184756
    })
  })

  describe("nPr function", () => {
    it("should return the correct number of permutations for valid inputs", () => {
      expect(nPr(5, 3)).toBe(60) // 5P3 = 60
      expect(nPr(6, 2)).toBe(30) // 6P2 = 30
      expect(nPr(10, 0)).toBe(1) // 10P0 = 1
      expect(nPr(10, 10)).toBe(3628800) // 10P10 = 3628800
    })

    it("should throw an error if n or r is negative", () => {
      expect(() => nPr(-5, 3)).toThrow("n and r must be non-negative integers.")
      expect(() => nPr(5, -3)).toThrow("n and r must be non-negative integers.")
    })

    it("should throw an error if n or r is not an integer", () => {
      expect(() => nPr(5.5, 3)).toThrow("n and r must be integers.")
      expect(() => nPr(5, 3.2)).toThrow("n and r must be integers.")
    })

    it("should throw an error if r is greater than n", () => {
      expect(() => nPr(3, 5)).toThrow("r must not be greater than n.")
    })

    it("should handle edge cases where r equals 0 or n", () => {
      expect(nPr(7, 0)).toBe(1) // nP0 = 1
      expect(nPr(7, 7)).toBe(5040) // 7P7 = 5040
    })

    it("should handle large values correctly", () => {
      expect(nPr(20, 10)).toBe(670442572800) // 20P10 = 670442572800
    })
  })
})
