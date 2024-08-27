import { describe, it, expect } from "vitest"
import isSymbol from "./is-symbol"

describe("isSymbol function", () => {
  it("should return true for symbol values", () => {
    expect(isSymbol(Symbol("test"))).toBe(true)
    expect(isSymbol(Symbol(42))).toBe(true)
    expect(isSymbol(Symbol(""))).toBe(true)
    expect(isSymbol(Symbol.iterator)).toBe(true)
    expect(isSymbol(Symbol.asyncIterator)).toBe(true)
  })

  it("should return false for non-symbol values", () => {
    // Numbers
    expect(isSymbol(42)).toBe(false)
    expect(isSymbol(0)).toBe(false)
    expect(isSymbol(-42)).toBe(false)
    expect(isSymbol(3.14)).toBe(false)
    expect(isSymbol(Number.MAX_SAFE_INTEGER)).toBe(false)
    expect(isSymbol(NaN)).toBe(false)
    expect(isSymbol(Infinity)).toBe(false)
    expect(isSymbol(-Infinity)).toBe(false)

    // Strings
    expect(isSymbol("symbol")).toBe(false)
    expect(isSymbol("")).toBe(false)
    expect(isSymbol(String("test"))).toBe(false)

    // Booleans
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(false)).toBe(false)

    // Null and Undefined
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)

    // Objects
    expect(isSymbol({})).toBe(false)
    expect(isSymbol({ key: "value" })).toBe(false)

    // Arrays
    expect(isSymbol([])).toBe(false)
    expect(isSymbol([Symbol("test")])).toBe(false)

    // Functions
    expect(isSymbol(() => {})).toBe(false)
    expect(isSymbol(function () {})).toBe(false)
    expect(isSymbol(async () => {})).toBe(false)
    expect(isSymbol(function* () {})).toBe(false)

    // BigInt
    expect(isSymbol(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isSymbol(new Date())).toBe(false)

    // Regular Expressions
    expect(isSymbol(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isSymbol(Buffer.from("buffer"))).toBe(false)
    expect(isSymbol(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
