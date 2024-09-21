import isNull from "../is-null/is-null"
import isUndefined from "../is-undefined/is-undefined"

/**
 * Memoizes a function to cache its results based on the arguments passed.
 *
 * @template T The type of the function being memoized.
 * @param fn The function to be memoized.
 * @returns The memoized function.
 */
export default function memoize<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>()

  return function (...args: Parameters<T>): ReturnType<T> {
    const key = Array.from(args)
      .map((arg) => `${isNull(arg) ? "null" : isUndefined(arg) ? "undefined" : JSON.stringify(arg)}`)
      .join("|")

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  } as T
}
