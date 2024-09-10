import sleep from "../sleep/sleep"

/**
 * Retries a function a specified number of times with a delay between each retry.
 * @template T - The type of the function being retried.
 * @param fn - The function to be retried.
 * @param retries - The number of times to retry the function, defaults to 3.
 * @param delay - The delay in milliseconds between each retry, defaults to 1000.
 * @returns A promise that resolves to the return value of the function being retried.
 * @throws Throws an error if the function fails after all retries.
 * @throws Throws an error if the number of retries is less than 1.
 */
export default function retry<T extends (...args: Parameters<T>) => Promise<ReturnType<T>>>(
  fn: T,
  retries: number = 3,
  delay: number = 1000,
) {
  if (retries < 1) throw new Error("Retries must be greater than 0.")
  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn(...args)
      } catch (error) {
        if (i === retries - 1) {
          throw error
        }
        await sleep(delay)
      }
    }
    throw new Error("This should never happen.")
  }
}
