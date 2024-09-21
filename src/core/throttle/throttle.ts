/**
 * Throttles the execution of a function.
 * The function will only be invoked once every `wait` milliseconds.
 *
 * @template T The type of the function to throttle.
 * @param fn The function to throttle.
 * @param wait The time to wait between function invocations.
 * @returns The throttled function.
 */
export default function throttle<T extends (...args: Parameters<T>) => void>(fn: T, wait: number): T {
  let lastCall = 0
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (...args: Parameters<T>): void {
    const now = Date.now()
    // Create a function to invoke the original function and store the current time.
    const invoke = () => {
      lastCall = now
      fn(...args)
    }
    // If the timeout exists, clear it.
    if (timeout) {
      clearTimeout(timeout)
    }
    // If the time since the last call is greater than or equal to the wait time, invoke the function.
    if (now - lastCall >= wait) {
      invoke()
    } else {
      // Otherwise, set a timeout to invoke the function after the remaining time has passed.
      timeout = setTimeout(invoke, wait - (now - lastCall))
    }
  } as T
}
