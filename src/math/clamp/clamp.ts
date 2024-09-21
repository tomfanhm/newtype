/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value The number to clamp.
 * @param min The minimum value to clamp to.
 * @param max The maximum value to clamp to.
 * @returns The clamped value.
 * @throws Will throw an error if the minimum value is greater than the maximum value.
 */
export default function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new Error("min must be less than or equal to max.")
  return Math.max(min, Math.min(max, value))
}
