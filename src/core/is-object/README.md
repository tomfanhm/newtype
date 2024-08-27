# Function `isObject`

Checks if a value is an object.

## Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

## Returns

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` if the value is an object, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isObject({})) // true
console.log(isObject([1, 2, 3])) // false
console.log(isObject(() => {})) // false
console.log(isObject(null)) // false
console.log(isObject(new Date())) // false
```
