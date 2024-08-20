/**
 * Measures the performance of a given callback function.
 *
 * @param callback - The callback function to be measured.
 * @returns A promise that resolves to the result of the callback function.
 */
export default async function measurePerformance<T>(callback: () => Promise<T>) {
  const initialMemory = process.memoryUsage().heapUsed
  const startTime = performance.now()
  const result = await callback()
  const endTime = performance.now()

  // Get final memory usage
  const finalMemory = process.memoryUsage().heapUsed

  // Calculate time and memory used
  const timeTaken = endTime - startTime
  const memoryUsed = finalMemory - initialMemory

  console.log(`Time taken: ${timeTaken.toFixed(2)} ms`)
  console.log(`Memory used: ${memoryUsed} bytes`)
  return result
}
