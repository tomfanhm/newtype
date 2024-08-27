import { describe, it, expect } from "vitest"
import isNumber from "./is-number"

describe("isNumber function", () => {
  it("should return true for number values", () => {
    expect(isNumber(42)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-42)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true)
  })

  it("should return false for non-number values", () => {
    // Invalid Numbers
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Infinity)).toBe(false)
    expect(isNumber(-Infinity)).toBe(false)

    // Strings
    expect(isNumber("42")).toBe(false)
    expect(isNumber("")).toBe(false)
    expect(isNumber(String("test"))).toBe(false)

    // Booleans
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)

    // Null and Undefined
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)

    // Objects
    expect(isNumber({})).toBe(false)
    expect(isNumber({ key: "value" })).toBe(false)

    // Arrays
    expect(isNumber([])).toBe(false)
    expect(isNumber([1, 2, 3])).toBe(false)

    // Functions
    expect(isNumber(() => {})).toBe(false)
    expect(isNumber(function () {})).toBe(false)

    // Symbols
    expect(isNumber(Symbol("test"))).toBe(false)

    // BigInt
    expect(isNumber(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isNumber(new Date())).toBe(false)

    // Regular Expressions
    expect(isNumber(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isNumber(Buffer.from("buffer"))).toBe(false)
    expect(isNumber(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
