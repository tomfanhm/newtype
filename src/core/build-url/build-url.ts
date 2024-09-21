/**
 * Builds a URL by appending query parameters to a base URL.
 * @param baseUrl The base URL.
 * @param params An object containing the query parameters as key-value pairs.
 * @returns The complete URL with the appended query parameters.
 */
export default function buildUrl(baseUrl: string, params: Record<string, string | number | boolean>): string {
  const url = new URL(baseUrl)
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key].toString())
  })
  return url.toString()
}
