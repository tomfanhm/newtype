# Function `formatDate`

Formats a date string according to the specified format.

## Parameters

| Parameter | Type   | Description                                                                                      |
| --------- | ------ | ------------------------------------------------------------------------------------------------ |
| dateStr   | string | The date string to format.                                                                       |
| format    | string | The format string. Use `"YYYY"` for the full year, `"MM"` for the month, and `"DD"` for the day. |

## Returns

| Type   | Description                |
| ------ | -------------------------- |
| string | The formatted date string. |

## Errors

| Type  | Description                                    |
| ----- | ---------------------------------------------- |
| Error | Thrown if the provided date string is invalid. |

## Examples

```typescript
console.log(formatDate("2024-09-16", "YYYY-MM-DD")) // "2024-09-16"
console.log(formatDate("2024-09-16", "MM/DD/YYYY")) // "09/16/2024"
```
