# Function `median`

Calculates the median value of an array of numbers.

## Parameters

| Parameter | Type       | Description           |
| --------- | ---------- | --------------------- |
| `numbers` | `number[]` | The array of numbers. |

## Returns

| Type     | Description                    |
| -------- | ------------------------------ |
| `number` | The median value of the array. |

## Errors

| Type    | Description                   |
| ------- | ----------------------------- |
| `Error` | Thrown if the array is empty. |

## Examples

```typescript
const oddData = [10, 20, 30]
const medianValue = median(oddData)
console.log(medianValue) // 20

const evenData = [10, 20, 30, 40]
const medianEven = median(evenData)
console.log(medianEven) // 25
```
