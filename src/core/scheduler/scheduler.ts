/**
 * Creates a scheduler that repeatedly executes a callback function with a specified period.
 * @param callback The callback function to be executed.
 * @param period The time interval between each execution of the callback function, in milliseconds.
 * @returns An object with `start` and `stop` methods to control the scheduler.
 */
export default function scheduler<T>(callback: () => Promise<T>, period: number) {
  let intervalId: NodeJS.Timeout | null = null

  /**
   * Starts the scheduler.
   */
  const start = () => {
    if (!intervalId) {
      intervalId = setInterval(callback, period)
    }
  }

  /**
   * Stops the scheduler.
   */
  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  return { start, stop }
}
