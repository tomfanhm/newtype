import { describe, it, expect } from "vitest"
import dateCalculator from "./date-calculator"

describe("dateCalculator function", () => {
  it("should add days correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addDay(5)
    expect(newDate).toEqual(new Date("2023-08-25"))
  })

  it("should subtract days correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.subtractDay(5)
    expect(newDate).toEqual(new Date("2023-08-15"))
  })

  it("should handle adding days across month boundaries", () => {
    const initialDate = new Date("2023-08-30")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addDay(5)
    expect(newDate).toEqual(new Date("2023-09-04"))
  })

  it("should handle subtracting days across month boundaries", () => {
    const initialDate = new Date("2023-09-05")
    const calc = dateCalculator(initialDate)
    const newDate = calc.subtractDay(10)
    expect(newDate).toEqual(new Date("2023-08-26"))
  })

  it("should add months correctly", () => {
    const initialDate = new Date("2023-01-15")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addMonth(2)
    expect(newDate).toEqual(new Date("2023-03-15"))
  })

  it("should subtract months correctly", () => {
    const initialDate = new Date("2023-03-15")
    const calc = dateCalculator(initialDate)
    const newDate = calc.subtractMonth(2)
    expect(newDate).toEqual(new Date("2023-01-15"))
  })

  it("should handle adding months across year boundaries", () => {
    const initialDate = new Date("2023-11-15")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addMonth(2)
    expect(newDate).toEqual(new Date("2024-01-15"))
  })

  it("should handle subtracting months across year boundaries", () => {
    const initialDate = new Date("2024-01-15")
    const calc = dateCalculator(initialDate)
    const newDate = calc.subtractMonth(2)
    expect(newDate).toEqual(new Date("2023-11-15"))
  })

  it("should add years correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addYear(5)
    expect(newDate).toEqual(new Date("2028-08-20"))
  })

  it("should subtract years correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.subtractYear(3)
    expect(newDate).toEqual(new Date("2020-08-20"))
  })

  it("should handle negative days correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addDay(-10)
    expect(newDate).toEqual(new Date("2023-08-10"))
  })

  it("should handle negative months correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addMonth(-6)
    expect(newDate).toEqual(new Date("2023-02-20"))
  })

  it("should handle negative years correctly", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    const newDate = calc.addYear(-2)
    expect(newDate).toEqual(new Date("2021-08-20"))
  })

  it("should maintain internal state correctly across multiple operations", () => {
    const initialDate = new Date("2023-08-20")
    const calc = dateCalculator(initialDate)
    calc.addDay(5)
    calc.subtractMonth(1)
    const newDate = calc.addYear(1)
    expect(newDate).toEqual(new Date("2024-07-25"))
  })
})
