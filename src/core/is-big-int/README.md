# Function `isBigInt`

Checks if the given value is a `BigInt`.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `true` if the value is a `BigInt`, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isBigInt(123n)) // true
console.log(isBigInt(123)) // false
console.log(isBigInt("123")) // false
console.log(isBigInt(null)) // false
```
