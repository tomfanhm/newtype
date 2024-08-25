# Function `isLeapYear`

Checks if a given year is a leap year.

## Parameters

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `year`    | `number` | The year to check. |

## Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `true` if the year is a leap year, `false` otherwise. |

## Errors

| Type    | Description                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------- |
| `Error` | Thrown if the year is less than 1582, as the Gregorian calendar was not introduced until 1582. |

## Examples

```typescript
// Example with a leap year
const isLeap2024 = isLeapYear(2024)
console.log(isLeap2024) // true

// Example with a non-leap year
const isLeap2023 = isLeapYear(2023)
console.log(isLeap2023) // false
```
