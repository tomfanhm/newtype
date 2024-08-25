# Function `range`

Generates an array of numbers within a specified range.

## Parameters

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| `start`   | `number` | The starting number of the range.                 |
| `end`     | `number` | The ending number of the range.                   |
| `step`    | `number` | The increment or decrement value. Default is `1`. |

## Returns

| Type       | Description                                     |
| ---------- | ----------------------------------------------- |
| `number[]` | An array of numbers within the specified range. |

## Errors

| Type    | Description                       |
| ------- | --------------------------------- |
| `Error` | Thrown if the step value is zero. |

## Examples

```typescript
// Example with a positive range
const positiveRange = range(1, 5)
console.log(positiveRange) // [1, 2, 3, 4]

// Example with a negative range
const negativeRange = range(5, 1, -1)
console.log(negativeRange) // [5, 4, 3, 2]

// Example with a custom step
const customStepRange = range(0, 10, 2)
console.log(customStepRange) // [0, 2, 4, 6, 8]
```
