import { describe, expect, it, vi } from "vitest"
import retry from "./retry"

describe("retry function", () => {
  it("should execute the function successfully without retries when the promise resolves", async () => {
    const fn = vi.fn().mockResolvedValue("success")
    const retryFn = retry(fn, 3, 1000)

    const result = await retryFn()

    expect(result).toBe("success")
    expect(fn).toHaveBeenCalledOnce()
  })

  it("should retry the function the specified number of times when the promise rejects", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("failure"))
    const retryFn = retry(fn, 3, 1000)

    await expect(retryFn()).rejects.toThrow("failure")
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("should resolve if the function succeeds after retries", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("failure"))
      .mockRejectedValueOnce(new Error("failure"))
      .mockResolvedValueOnce("success")

    const retryFn = retry(fn, 3, 1000)

    const result = await retryFn()

    expect(result).toBe("success")
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("should throw an error after exhausting all retries", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("failure"))
    const retryFn = retry(fn, 3, 1000)

    await expect(retryFn()).rejects.toThrow("failure")
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("should respect the delay between retries", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("failure"))
    const delay = 500
    const retryFn = retry(fn, 2, delay)

    const start = Date.now()

    await expect(retryFn()).rejects.toThrow("failure")

    const end = Date.now()
    const duration = end - start

    expect(duration).toBeGreaterThanOrEqual(delay * (2 - 1)) // The time should be at least one delay period (500ms)
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it("should succeed on the first call even if retries are allowed", async () => {
    const fn = vi.fn().mockResolvedValue("success")
    const retryFn = retry(fn, 5, 1000)

    const result = await retryFn()

    expect(result).toBe("success")
    expect(fn).toHaveBeenCalledOnce() // It should not retry if it succeeds on the first attempt
  })
})
