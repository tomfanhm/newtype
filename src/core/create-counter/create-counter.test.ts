import { describe, it, expect, beforeEach } from "vitest"
import createCounter from "./create-counter"

describe("createCounter function", () => {
  let counter: ReturnType<typeof createCounter>

  beforeEach(() => {
    counter = createCounter()
  })

  it("should initialize the counter with a value of 0", () => {
    expect(counter.value()).toBe(0)
  })

  it("should increment the counter by 1", () => {
    expect(counter.increment()).toBe(1)
    expect(counter.value()).toBe(1)
  })

  it("should increment the counter multiple times", () => {
    counter.increment()
    counter.increment()
    expect(counter.increment()).toBe(3)
    expect(counter.value()).toBe(3)
  })

  it("should reset the counter to 0", () => {
    counter.increment()
    counter.increment()
    expect(counter.reset()).toBe(0)
    expect(counter.value()).toBe(0)
  })

  it("should reset the counter and then increment again", () => {
    counter.increment()
    counter.increment()
    counter.reset()
    expect(counter.increment()).toBe(1)
    expect(counter.value()).toBe(1)
  })

  it("should return the current value without incrementing", () => {
    counter.increment()
    expect(counter.value()).toBe(1)
    expect(counter.value()).toBe(1)
  })
})
