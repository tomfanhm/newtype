# Function `isWeekend`

Checks if a given date falls on a weekend (Saturday or Sunday).

## Parameters

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| `date`    | `string` | The date to check in string format. |

## Returns

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `boolean` | Indicates whether the date falls on a weekend. |

## Errors

| Type    | Description                                   |
| ------- | --------------------------------------------- |
| `Error` | Thrown if an invalid date string is provided. |

## Examples

```typescript
// Example with a weekend date (Saturday)
const isWeekendDate1 = isWeekend("2024-08-24")
console.log(isWeekendDate1) // true

// Example with a weekday date (Wednesday)
const isWeekendDate2 = isWeekend("2024-08-21")
console.log(isWeekendDate2) // false
```
