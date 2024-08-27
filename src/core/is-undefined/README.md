# Function `isUndefined`

Checks if a value is `undefined`.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                            |
| --------- | ------------------------------------------------------ |
| `boolean` | `true` if the value is `undefined`, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
let value
console.log(isUndefined(value)) // true
console.log(isUndefined(null)) // false
console.log(isUndefined("Hello")) // false
console.log(isUndefined(42)) // false
```
