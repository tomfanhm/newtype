import { describe, expect, it } from "vitest"
import isBigInt from "./is-big-int"

describe("isBigInt function", () => {
  it("should return true for BigInt values", () => {
    expect(isBigInt(BigInt(123))).toBe(true)
    expect(isBigInt(BigInt(0))).toBe(true)
    expect(isBigInt(BigInt(-123))).toBe(true)
    expect(isBigInt(BigInt(Number.MAX_SAFE_INTEGER))).toBe(true)
    expect(isBigInt(BigInt(Number.MIN_SAFE_INTEGER))).toBe(true)
  })

  it("should return false for non-BigInt values", () => {
    // Numbers
    expect(isBigInt(123)).toBe(false)
    expect(isBigInt(0)).toBe(false)
    expect(isBigInt(-123)).toBe(false)
    expect(isBigInt(NaN)).toBe(false)
    expect(isBigInt(Infinity)).toBe(false)
    expect(isBigInt(-Infinity)).toBe(false)

    // Strings
    expect(isBigInt("123")).toBe(false)
    expect(isBigInt("")).toBe(false)
    expect(isBigInt(String("test"))).toBe(false)

    // Booleans
    expect(isBigInt(true)).toBe(false)
    expect(isBigInt(false)).toBe(false)

    // Null and Undefined
    expect(isBigInt(null)).toBe(false)
    expect(isBigInt(undefined)).toBe(false)

    // Objects
    expect(isBigInt({})).toBe(false)
    expect(isBigInt({ key: "value" })).toBe(false)

    // Arrays
    expect(isBigInt([])).toBe(false)
    expect(isBigInt([1, 2, 3])).toBe(false)

    // Functions
    expect(isBigInt(() => {})).toBe(false)
    expect(isBigInt(function () {})).toBe(false)

    // Symbols
    expect(isBigInt(Symbol("123"))).toBe(false)

    // Dates
    expect(isBigInt(new Date())).toBe(false)

    // Regular Expressions
    expect(isBigInt(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isBigInt(Buffer.from("buffer"))).toBe(false)
    expect(isBigInt(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
