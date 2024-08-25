# Function `parseUrl`

Parses a URL and returns its components.

## Parameters

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `url`     | `string` | The URL to parse. |

## Returns

| Type                      | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `Prettify<URLComponents>` | An object containing the components of the parsed URL. |

## URLComponents Type

| Property       | Type                 | Description                                                    |
| -------------- | -------------------- | -------------------------------------------------------------- |
| `href`         | `string`             | The full URL string.                                           |
| `protocol`     | `string`             | The protocol of the URL (e.g., `http:`).                       |
| `host`         | `string`             | The host (hostname and port) of the URL.                       |
| `hostname`     | `string`             | The hostname of the URL.                                       |
| `port`         | `string`             | The port number of the URL.                                    |
| `pathname`     | `string`             | The path of the URL.                                           |
| `search`       | `string`             | The query string, including the leading `?`.                   |
| `searchParams` | `[string, string][]` | An array of key-value pairs representing the query parameters. |
| `hash`         | `string`             | The fragment identifier, including the leading `#`.            |
| `origin`       | `string`             | The origin of the URL (protocol, hostname, and port).          |

## Errors

| Type    | Description                                  |
| ------- | -------------------------------------------- |
| `Error` | Thrown if an invalid URL string is provided. |

## Examples

```typescript
const url = "https://example.com:8080/path?name=value#section"
const components = parseUrl(url)

console.log(components.href) // "https://example.com:8080/path?name=value#section"
console.log(components.protocol) // "https:"
console.log(components.host) // "example.com:8080"
console.log(components.hostname) // "example.com"
console.log(components.port) // "8080"
console.log(components.pathname) // "/path"
console.log(components.search) // "?name=value"
console.log(components.searchParams) // [["name", "value"]]
console.log(components.hash) // "#section"
console.log(components.origin) // "https://example.com:8080"
```
