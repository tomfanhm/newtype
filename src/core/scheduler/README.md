# Function `scheduler`

Creates a scheduler that repeatedly executes a callback function at a specified period.

## Parameters

| Parameter  | Type               | Description                                                                         |
| ---------- | ------------------ | ----------------------------------------------------------------------------------- |
| `callback` | `() => Promise<T>` | The callback function to be executed.                                               |
| `period`   | `number`           | The time interval between each execution of the callback function, in milliseconds. |

## Returns

| Type     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| `object` | An object with `start` and `stop` methods to control the scheduler. |

## Methods

### `start`

Starts the scheduler, which begins executing the callback function at the specified interval.

### `stop`

Stops the scheduler, halting any further executions of the callback function.

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const myCallback = async () => {
  console.log("Callback executed at", new Date())
}

const myScheduler = scheduler(myCallback, 2000) // Executes every 2 seconds

// Start the scheduler
myScheduler.start()
```
