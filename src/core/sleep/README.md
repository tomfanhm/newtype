# Function `sleep`

Pauses the execution for the specified number of milliseconds.

## Parameters

| Parameter      | Type     | Description                          |
| -------------- | -------- | ------------------------------------ |
| `milliseconds` | `number` | The number of milliseconds to sleep. |

## Returns

| Type            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `Promise<void>` | A promise that resolves after the specified number of milliseconds. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example usage of sleep function
async function example() {
  console.log("Start")
  await sleep(2000) // Pauses execution for 2 seconds
  console.log("End")
}

example()
// Output:
// Start
// (Pauses for 2 seconds)
// End
```
