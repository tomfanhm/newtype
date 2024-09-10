# Function `throttle`

Throttles the execution of a function, ensuring that it is only invoked once every specified number of milliseconds (`wait`). This is useful for rate-limiting functions that are triggered frequently, such as in response to user input or window resizing events.

## Parameters

| Parameter | Type     | Description                                                    |
| --------- | -------- | -------------------------------------------------------------- |
| `fn`      | `T`      | The function to throttle.                                      |
| `wait`    | `number` | The time in milliseconds to wait between function invocations. |

## Returns

| Type | Description                                                                                     |
| ---- | ----------------------------------------------------------------------------------------------- |
| `T`  | The throttled function, which has the same parameters and return type as the original function. |

## Errors

This function does not throw any errors directly. However, if the throttled function `fn` throws an error, that error will propagate as usual.

## Examples

```typescript
const log = (message: string) => console.log(message)
const throttledLog = throttle(log, 1000)

throttledLog("Hello") // Immediately logs "Hello"
throttledLog("World") // logs "Hello" after 1000 milliseconds
```
