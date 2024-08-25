# Function `buildUrl`

Builds a URL by appending query parameters to a base URL.

## Parameters

| Parameter | Type                                          | Description                                                   |
| --------- | --------------------------------------------- | ------------------------------------------------------------- |
| `baseUrl` | `string`                                      | The base URL.                                                 |
| `params`  | `Record<string, string \| number \| boolean>` | An object containing the query parameters as key-value pairs. |

## Returns

| Type     | Description                                          |
| -------- | ---------------------------------------------------- |
| `string` | The complete URL with the appended query parameters. |

## Examples

```typescript
const baseUrl = "https://example.com/api"
const params = {
  search: "test",
  limit: 10,
  active: true,
}

const completeUrl = buildUrl(baseUrl, params)
console.log(completeUrl) // "https://example.com/api?search=test&limit=10&active=true"
```
