import { describe, expect, it } from "vitest"
import isObject from "./is-object"

describe("isObject function", () => {
  it("should return true for object values", () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ key: "value" })).toBe(true)
  })

  it("should return false for non-object values", () => {
    // Numbers
    expect(isObject(42)).toBe(false)
    expect(isObject(NaN)).toBe(false)
    expect(isObject(Infinity)).toBe(false)
    expect(isObject(-Infinity)).toBe(false)

    // Strings
    expect(isObject("hello")).toBe(false)
    expect(isObject(String("test"))).toBe(false)

    // Booleans
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)

    // Null and Undefined
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)

    // Arrays
    expect(isObject([])).toBe(false)
    expect(isObject(["hello"])).toBe(false)

    // Functions
    expect(isObject(() => {})).toBe(false)
    expect(isObject(function () {})).toBe(false)

    // Symbols
    expect(isObject(Symbol("test"))).toBe(false)

    // BigInt
    expect(isObject(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isObject(new Date())).toBe(false)

    // Regular Expressions
    expect(isObject(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isObject(Buffer.from("buffer"))).toBe(false)
    expect(isObject(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
