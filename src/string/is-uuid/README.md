# Function `isUUID`

Checks if a string is a valid UUID (Universally Unique Identifier).

## Parameters

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| `str`     | `string` | The string to be checked. |

## Returns

| Type      | Description                                              |
| --------- | -------------------------------------------------------- |
| `boolean` | A boolean indicating whether the string is a valid UUID. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isUUID("123e4567-e89b-12d3-a456-426614174000")) // true
console.log(isUUID("123e4567-e89b-12d3-a456-42661417400")) // false
console.log(isUUID("not-a-uuid")) // false
```
