import { Prettify } from "@/lib/utils"

type URLComponents = {
  href: string
  protocol: string
  host: string
  hostname: string
  port: string
  pathname: string
  search: string
  searchParams: [string, string][]
  hash: string
  origin: string
}

/**
 * Parses a URL and returns its components.
 *
 * @param url The URL to parse.
 * @returns An object containing the components of the parsed URL.
 */
export default function parseUrl(url: string): Prettify<URLComponents> {
  const parsedUrl = new URL(url)
  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    searchParams: [...parsedUrl.searchParams],
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
  }
}
