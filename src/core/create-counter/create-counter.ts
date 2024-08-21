/**
 * Creates a counter object with increment, value, and reset functions.
 * @returns An object with increment, value, and reset functions.
 */
export default function createCounter() {
  let count = 0

  return {
    /**
     * Increments the counter by 1 and returns the updated count.
     * @returns The updated count after incrementing.
     */
    increment: () => {
      count += 1
      return count
    },
    /**
     * Returns the current value of the counter.
     * @returns The current value of the counter.
     */
    value: () => count,
    /**
     * Resets the counter to 0 and returns the updated count.
     * @returns The updated count after resetting.
     */
    reset: () => {
      count = 0
      return count
    },
  }
}
