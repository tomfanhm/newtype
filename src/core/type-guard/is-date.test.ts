import { describe, it, expect } from "vitest"
import { isDate } from "./type-guard"

describe("isDate function", () => {
  it("should return true for date values", () => {
    expect(isDate(new Date())).toBe(true)
  })

  it("should return false for non-date values", () => {
    // Numbers
    expect(isDate(42)).toBe(false)
    expect(isDate(NaN)).toBe(false)
    expect(isDate(Infinity)).toBe(false)

    // Strings
    expect(isDate("hello")).toBe(false)
    expect(isDate(String("test"))).toBe(false)

    // Booleans
    expect(isDate(true)).toBe(false)
    expect(isDate(false)).toBe(false)

    // Null and Undefined
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)

    // Objects
    expect(isDate({})).toBe(false)
    expect(isDate({ key: "value" })).toBe(false)
    expect(isDate(new String("test"))).toBe(false)

    // Arrays
    expect(isDate([])).toBe(false)
    expect(isDate(["hello"])).toBe(false)

    // Functions
    expect(isDate(() => {})).toBe(false)
    expect(isDate(function () {})).toBe(false)

    // Symbols
    expect(isDate(Symbol("test"))).toBe(false)

    // BigInt
    expect(isDate(BigInt(9007199254740991))).toBe(false)

    // Regular Expressions
    expect(isDate(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isDate(Buffer.from("buffer"))).toBe(false)
    expect(isDate(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
