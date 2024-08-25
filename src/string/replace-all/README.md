# Function `replaceAll`

Replaces all occurrences of a target string with a replacement string in the input string.

## Parameters

| Parameter     | Type     | Description                       |
| ------------- | -------- | --------------------------------- |
| `input`       | `string` | The input string.                 |
| `target`      | `string` | The target string to be replaced. |
| `replacement` | `string` | The replacement string.           |

## Returns

| Type     | Description                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| `string` | The input string with all occurrences of the target string replaced by the replacement string. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const str = "The quick brown fox jumps over the lazy dog."
const result = replaceAll(str, "o", "0")
console.log(result) // "The quick br0wn f0x jumps 0ver the lazy d0g."
```

```typescript
const str = "Hello, world! Hello, everyone!"
const result = replaceAll(str, "Hello", "Hi")
console.log(result) // "Hi, world! Hi, everyone!"
```

```typescript
const str = "No replacements needed."
const result = replaceAll(str, "z", "x")
console.log(result) // "No replacements needed."
```
