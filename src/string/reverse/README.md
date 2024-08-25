# Function `reverse`

Reverses the characters in a given string.

## Parameters

| Parameter | Type     | Description                |
| --------- | -------- | -------------------------- |
| `str`     | `string` | The string to be reversed. |

## Returns

| Type     | Description          |
| -------- | -------------------- |
| `string` | The reversed string. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const str = "hello"
const result = reverse(str)
console.log(result) // "olleh"
```

```typescript
const str = "12345"
const result = reverse(str)
console.log(result) // "54321"
```
