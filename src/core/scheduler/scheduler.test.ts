import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import scheduler from "./scheduler"

describe("scheduler function", () => {
  let callback: ReturnType<typeof vi.fn>
  let clock: ReturnType<typeof vi.useFakeTimers>

  beforeEach(() => {
    clock = vi.useFakeTimers()
    callback = vi.fn(() => Promise.resolve())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should start the scheduler and call the callback periodically", () => {
    const period = 1000 // 1 second
    const { start } = scheduler(callback, period)

    start()

    expect(callback).not.toHaveBeenCalled()
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(1)
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it("should not start the scheduler more than once", () => {
    const period = 1000
    const { start } = scheduler(callback, period)

    start()
    start() // Call start again to check if it starts multiple times

    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(1)
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it("should stop the scheduler and prevent further calls to the callback", () => {
    const period = 1000
    const { start, stop } = scheduler(callback, period)

    start()
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(1)

    stop()
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(1) // No additional calls should be made after stopping
  })

  it("should handle calling stop before start without errors", () => {
    const period = 1000
    const { stop } = scheduler(callback, period)

    // Call stop before start; this should not throw any error
    expect(() => stop()).not.toThrow()
  })

  it("should correctly restart the scheduler after stopping", () => {
    const period = 1000
    const { start, stop } = scheduler(callback, period)

    start()
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(1)

    stop()
    clock.advanceTimersByTime(period * 2)
    expect(callback).toHaveBeenCalledTimes(1) // No further calls after stopping

    start()
    clock.advanceTimersByTime(period)
    expect(callback).toHaveBeenCalledTimes(2) // Resumed scheduler should call again
  })
})
