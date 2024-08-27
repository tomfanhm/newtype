import { describe, it, expect } from "vitest"
import isBoolean from "./is-boolean"

describe("isBoolean function", () => {
  it("should return true for boolean values", () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it("should return false for non-boolean values", () => {
    // Numbers
    expect(isBoolean(42)).toBe(false)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(-42)).toBe(false)
    expect(isBoolean(3.14)).toBe(false)
    expect(isBoolean(Number.MAX_SAFE_INTEGER)).toBe(false)
    expect(isBoolean(NaN)).toBe(false)
    expect(isBoolean(Infinity)).toBe(false)
    expect(isBoolean(-Infinity)).toBe(false)

    // Strings
    expect(isBoolean("true")).toBe(false)
    expect(isBoolean("false")).toBe(false)
    expect(isBoolean("")).toBe(false)
    expect(isBoolean(String("test"))).toBe(false)

    // Null and Undefined
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)

    // Objects
    expect(isBoolean({})).toBe(false)
    expect(isBoolean({ key: "value" })).toBe(false)

    // Arrays
    expect(isBoolean([])).toBe(false)
    expect(isBoolean([true, false])).toBe(false)

    // Functions
    expect(isBoolean(() => {})).toBe(false)
    expect(isBoolean(function () {})).toBe(false)

    // Symbols
    expect(isBoolean(Symbol("test"))).toBe(false)

    // BigInt
    expect(isBoolean(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isBoolean(new Date())).toBe(false)

    // Regular Expressions
    expect(isBoolean(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isBoolean(Buffer.from("buffer"))).toBe(false)
    expect(isBoolean(new Uint8Array([1, 2, 3]))).toBe(false)

    // Class
    class Test {}
    expect(isBoolean(new Test())).toBe(false)

    // Map and Set
    expect(isBoolean(new Map())).toBe(false)
    expect(isBoolean(new Set())).toBe(false)

    // WeakMap and WeakSet
    expect(isBoolean(new WeakMap())).toBe(false)
    expect(isBoolean(new WeakSet())).toBe(false)

    // Promises
    expect(isBoolean(Promise.resolve())).toBe(false)

    // Errors
    expect(isBoolean(new Error())).toBe(false)
  })
})
