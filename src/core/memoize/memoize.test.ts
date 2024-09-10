import { describe, expect, it, vi } from "vitest"
import memoize from "./memoize"

describe("memoize function", () => {
  it("should return the correct result for the first function call", () => {
    const fn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(fn)

    expect(memoizedFn(2)).toBe(4)
    expect(fn).toHaveBeenCalledOnce()
  })

  it("should return the cached result for subsequent calls with the same arguments", () => {
    const fn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(fn)

    memoizedFn(2)
    expect(fn).toHaveBeenCalledTimes(1)

    const result = memoizedFn(2)
    expect(result).toBe(4)
    expect(fn).toHaveBeenCalledTimes(1) // Cached, should not call again
  })

  it("should handle multiple arguments", () => {
    const fn = vi.fn((a: number, b: number) => a + b)
    const memoizedFn = memoize(fn)

    expect(memoizedFn(2, 3)).toBe(5)
    expect(memoizedFn(2, 3)).toBe(5)
    expect(fn).toHaveBeenCalledTimes(1) // Cached
  })

  it("should cache results separately for different arguments", () => {
    const fn = vi.fn((x: number) => x * 2)
    const memoizedFn = memoize(fn)

    memoizedFn(2)
    memoizedFn(3)

    expect(fn).toHaveBeenCalledTimes(2)
    expect(memoizedFn(2)).toBe(4) // Cached
    expect(memoizedFn(3)).toBe(6) // Cached
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it("should work with string arguments", () => {
    const fn = vi.fn((s: string) => s.toUpperCase())
    const memoizedFn = memoize(fn)

    expect(memoizedFn("hello")).toBe("HELLO")
    expect(memoizedFn("hello")).toBe("HELLO")
    expect(fn).toHaveBeenCalledTimes(1) // Cached
  })

  it("should handle object arguments correctly", () => {
    const fn = vi.fn((obj: { a: number }) => obj.a * 2)
    const memoizedFn = memoize(fn)

    const obj = { a: 2 }
    expect(memoizedFn(obj)).toBe(4)
    expect(memoizedFn(obj)).toBe(4)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it("should handle array arguments correctly", () => {
    const fn = vi.fn((arr: number[]) => arr.reduce((sum, num) => sum + num, 0))
    const memoizedFn = memoize(fn)

    const arr = [1, 2, 3]
    expect(memoizedFn(arr)).toBe(6)
    expect(memoizedFn(arr)).toBe(6)
    expect(fn).toHaveBeenCalledTimes(1) // Cached, same array reference
  })

  it("should handle no arguments", () => {
    const fn = vi.fn(() => 42)
    const memoizedFn = memoize(fn)

    expect(memoizedFn()).toBe(42)
    expect(memoizedFn()).toBe(42)
    expect(fn).toHaveBeenCalledTimes(1) // Cached
  })

  it("should handle undefined and null arguments", () => {
    const fn = vi.fn((a: number | null | undefined) => (a == null ? "no value" : a * 2))
    const memoizedFn = memoize(fn)

    expect(memoizedFn(null)).toBe("no value")
    expect(memoizedFn(undefined)).toBe("no value")
    expect(memoizedFn(2)).toBe(4)
    expect(fn).toHaveBeenCalledTimes(3)
    expect(memoizedFn(null)).toBe("no value")
    expect(memoizedFn(undefined)).toBe("no value")
    expect(memoizedFn(2)).toBe(4)
    expect(fn).toHaveBeenCalledTimes(3) // Cached for each unique argument
  })
})
