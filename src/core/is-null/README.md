# Function `isNull`

Checks if a value is `null`.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                       |
| --------- | ------------------------------------------------- |
| `boolean` | `true` if the value is `null`, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isNull(null)) // true
console.log(isNull(undefined)) // false
console.log(isNull("Hello")) // false
console.log(isNull(42)) // false
```
