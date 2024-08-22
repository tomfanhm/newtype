import { describe, it, expect } from "vitest"
import { isNull } from "./type-guard"

describe("isNull function", () => {
  it("should return true for null values", () => {
    expect(isNull(null)).toBe(true)
  })

  it("should return false for non-null values", () => {
    // Numbers
    expect(isNull(42)).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull(-42)).toBe(false)
    expect(isNull(3.14)).toBe(false)
    expect(isNull(Number.MAX_SAFE_INTEGER)).toBe(false)

    // Strings
    expect(isNull("null")).toBe(false)
    expect(isNull("")).toBe(false)
    expect(isNull(String("test"))).toBe(false)

    // Booleans
    expect(isNull(true)).toBe(false)
    expect(isNull(false)).toBe(false)

    // Undefined
    expect(isNull(undefined)).toBe(false)

    // Objects
    expect(isNull({})).toBe(false)
    expect(isNull({ key: "value" })).toBe(false)

    // Arrays
    expect(isNull([])).toBe(false)
    expect(isNull([null])).toBe(false)

    // Functions
    expect(isNull(() => {})).toBe(false)
    expect(isNull(function () {})).toBe(false)

    // Symbols
    expect(isNull(Symbol("test"))).toBe(false)

    // BigInt
    expect(isNull(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isNull(new Date())).toBe(false)

    // Regular Expressions
    expect(isNull(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isNull(Buffer.from("buffer"))).toBe(false)
    expect(isNull(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
