# Function `age`

Calculates the age based on the provided birth date.

## Parameters

| Parameter   | Type     | Description                                           |
| ----------- | -------- | ----------------------------------------------------- |
| `birthDate` | `string` | The birth date in string format (e.g., "YYYY-MM-DD"). |

## Returns

| Type     | Description                     |
| -------- | ------------------------------- |
| `number` | The calculated age as a number. |

## Errors

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| `Error` | Thrown if an invalid birth date string is provided. |

## Examples

```typescript
const personAge = age("1990-05-15")
console.log(personAge) // The calculated age based on the current date
```
