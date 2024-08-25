# Function `truncate`

Truncates a string to a specified length and appends a tail if the string exceeds the maximum length.

## Parameters

| Parameter | Type     | Description                                                     |
| --------- | -------- | --------------------------------------------------------------- |
| `str`     | `string` | The string to truncate.                                         |
| `length`  | `number` | The maximum length of the truncated string.                     |
| `tail`    | `string` | The tail to append to the truncated string. Default is `"..."`. |

## Returns

| Type     | Description           |
| -------- | --------------------- |
| `string` | The truncated string. |

## Errors

| Type    | Description                           |
| ------- | ------------------------------------- |
| `Error` | Thrown if `length` is not an integer. |

## Examples

```typescript
const str = "Hello, this is a long string that needs truncating."
const result = truncate(str, 20)
console.log(result) // "Hello, this is a lon..."
```

```typescript
const str = "Short string"
const result = truncate(str, 20)
console.log(result) // "Short string"
```

```typescript
const str = "Another long string"
const result = truncate(str, 10, "---")
console.log(result) // "Another lo---"
```
