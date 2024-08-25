# Function `mode`

Calculates the mode(s) of an array of numbers. The mode is the value(s) that appear most frequently in the array. If there are multiple modes, all of them will be returned.

## Parameters

| Parameter | Type       | Description          |
| --------- | ---------- | -------------------- |
| `numbers` | `number[]` | An array of numbers. |

## Returns

| Type       | Description                               |
| ---------- | ----------------------------------------- |
| `number[]` | An array of mode(s) from the input array. |

## Errors

| Type    | Description                         |
| ------- | ----------------------------------- |
| `Error` | Thrown if the input array is empty. |

## Examples

```typescript
const data = [1, 2, 2, 3, 3, 4]

// Example with multiple modes
const modes = mode(data)
console.log(modes) // [2, 3]

const singleModeData = [1, 1, 2, 3]
const singleMode = mode(singleModeData)
console.log(singleMode) // [1]

const noModeData = [5, 5, 5]
const noMode = mode(noModeData)
console.log(noMode) // [5]
```
