/**
 * Pauses the execution for the specified number of milliseconds.
 * @param milliseconds The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified number of milliseconds.
 */
export default async function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
