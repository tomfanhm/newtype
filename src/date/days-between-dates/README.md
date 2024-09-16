# Function `daysBetweenDates`

Calculates the number of days between two dates.

## Parameters

| Parameter | Type | Description      |
| --------- | ---- | ---------------- |
| date1     | Date | The first date.  |
| date2     | Date | The second date. |

## Returns

| Type   | Description                               |
| ------ | ----------------------------------------- |
| number | The number of days between the two dates. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(daysBetweenDates(new Date("2024-09-16"), new Date("2024-09-10"))) // 6
console.log(daysBetweenDates(new Date("2024-01-01"), new Date("2023-01-01"))) // 365
```
