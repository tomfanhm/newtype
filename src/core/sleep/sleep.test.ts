import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import sleep from "./sleep"

describe("sleep function", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should resolve after the specified number of milliseconds", async () => {
    const milliseconds = 1000 // 1 second

    const promise = sleep(milliseconds)

    let resolved = false
    promise.then(() => {
      resolved = true
    })

    expect(resolved).toBe(false)

    vi.advanceTimersByTime(milliseconds)
    await promise
    expect(resolved).toBe(true)
  })

  it("should handle zero milliseconds", async () => {
    const milliseconds = 0

    const promise = sleep(milliseconds)

    let resolved = false
    promise.then(() => {
      resolved = true
    })

    expect(resolved).toBe(false)

    vi.advanceTimersByTime(milliseconds)

    await promise
    expect(resolved).toBe(true)
  })

  it("should handle large numbers of milliseconds", async () => {
    const milliseconds = 100000 // 100 seconds

    const promise = sleep(milliseconds)

    let resolved = false
    promise.then(() => {
      resolved = true
    })

    expect(resolved).toBe(false)

    vi.advanceTimersByTime(milliseconds)
    await promise
    expect(resolved).toBe(true)
  })
})
