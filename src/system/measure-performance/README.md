# Function `measurePerformance`

Measures the performance of a given asynchronous callback function by calculating the time taken and memory used during its execution.

## Parameters

| Parameter  | Type               | Description                                        |
| ---------- | ------------------ | -------------------------------------------------- |
| `callback` | `() => Promise<T>` | The asynchronous callback function to be measured. |

## Returns

| Type         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `Promise<T>` | A promise that resolves to the result of the callback function. |

## Errors

This function does not throw any explicit errors but will propagate any errors thrown by the `callback` function.

## Examples

```typescript
async function func() {
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

measurePerformance(func)
```
