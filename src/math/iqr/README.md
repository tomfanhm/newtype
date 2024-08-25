# Function `iqr`

Calculates the interquartile range (IQR) of an array of numbers. The IQR is the difference between the third quartile (Q3) and the first quartile (Q1).

## Parameters

| Parameter | Type       | Description           |
| --------- | ---------- | --------------------- |
| `numbers` | `number[]` | The array of numbers. |

## Returns

| Type     | Description                                   |
| -------- | --------------------------------------------- |
| `number` | The interquartile range (IQR) of the numbers. |

## Errors

This function does not throw any explicit errors directly, but it relies on the `q1` and `q3` functions, which will throw errors if the input array contains fewer than 4 elements.

## Examples

```typescript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = iqr(data)
console.log(result) // 5
```
