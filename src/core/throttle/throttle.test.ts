import { beforeEach, describe, expect, it } from "vitest"
import createCounter from "../create-counter/create-counter"
import throttle from "./throttle"

describe("throttle function", () => {
  let counter: ReturnType<typeof createCounter>
  let throttledIncrement: ReturnType<typeof throttle>

  beforeEach(() => {
    counter = createCounter()
    throttledIncrement = throttle(counter.increment, 100)
  })

  it("should increment the counter immediately on the first call", () => {
    throttledIncrement()
    expect(counter.value()).toBe(1)
  })

  it("should not increment the counter again if called within the wait period", () => {
    throttledIncrement()
    throttledIncrement()
    expect(counter.value()).toBe(1)
  })

  it("should increment the counter again after the wait period has passed", async () => {
    throttledIncrement()
    throttledIncrement()
    expect(counter.value()).toBe(1)
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(counter.value()).toBe(2)
  })

  it("should not increment the counter until after the wait time if invoked multiple times in rapid succession", async () => {
    throttledIncrement()
    throttledIncrement()
    throttledIncrement()
    throttledIncrement()
    throttledIncrement()
    expect(counter.value()).toBe(1)
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(counter.value()).toBe(2)
  })
})
