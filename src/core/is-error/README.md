# Function `isError`

Checks if a value is an instance of `Error`.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `boolean` | `True` if the value is an instance of `Error`, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isError(new Error("Something went wrong"))) // true
console.log(isError("Not an error")) // false
console.log(isError(null)) // false
console.log(isError({ message: "Not an error object" })) // false
```
