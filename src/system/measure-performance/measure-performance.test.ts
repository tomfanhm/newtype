import { describe, expect, it } from "vitest"
import measurePerformance from "./measure-performance"

describe("measurePerformance function", () => {
  it("should measure the performance of a given callback function", async () => {
    const callback = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const result = await response.json()
      return JSON.parse(JSON.stringify(result))
    }

    const result = await measurePerformance(callback)
    const expected = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    }
    expect(result).toStrictEqual(expected)
  })
})
