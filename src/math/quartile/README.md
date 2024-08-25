# Functions `q1`, `q2`, `q3`, `q4`

These functions calculate the first, second, third, and fourth quartiles of an array of numbers, respectively.

## Parameters

| Parameter | Type       | Description           |
| --------- | ---------- | --------------------- |
| `numbers` | `number[]` | The array of numbers. |

## Returns

| Type     | Description                                          |
| -------- | ---------------------------------------------------- |
| `number` | The corresponding quartile value of the input array. |

## Errors

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| `Error` | Thrown if the array contains fewer than 4 elements. |

## Examples

```typescript
const data = [10, 20, 30, 40, 50, 60, 70, 80]

// First Quartile (Q1)
const firstQuartile = q1(data)
console.log(firstQuartile) // 25

// Second Quartile (Q2), which is also the median
const secondQuartile = q2(data)
console.log(secondQuartile) // 45

// Third Quartile (Q3)
const thirdQuartile = q3(data)
console.log(thirdQuartile) // 65

// Fourth Quartile (Q4), which is the maximum value
const fourthQuartile = q4(data)
console.log(fourthQuartile) // 80
```
