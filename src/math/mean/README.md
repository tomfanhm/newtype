# Function `mean`

Calculates the mean (average) of an array of numbers.

## Parameters

| Parameter | Type       | Description           |
| --------- | ---------- | --------------------- |
| `numbers` | `number[]` | The array of numbers. |

## Returns

| Type     | Description              |
| -------- | ------------------------ |
| `number` | The mean of the numbers. |

## Errors

| Type    | Description                   |
| ------- | ----------------------------- |
| `Error` | Thrown if the array is empty. |

## Examples

```typescript
const data = [10, 20, 30, 40, 50]
const average = mean(data)
console.log(average) // 30
```
