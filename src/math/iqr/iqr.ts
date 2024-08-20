import { q1, q3 } from "../quartile/quartile"

export default function iqr(numbers: number[]): number {
  return q3(numbers) - q1(numbers)
}
