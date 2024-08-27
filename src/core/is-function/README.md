# Function `isFunction`

Checks if a value is a function.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `True` if the value is a function, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isFunction(() => {})) // true
console.log(isFunction("Hello")) // false
console.log(isFunction({})) // false
console.log(isFunction(null)) // false
```
