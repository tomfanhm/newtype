# Function `retry`

Retries a function a specified number of times with a delay between each retry. Useful for handling transient failures, such as network requests or external API calls.

## Parameters

| Parameter | Type     | Description                                                        |
| --------- | -------- | ------------------------------------------------------------------ |
| `fn`      | `T`      | The asynchronous function to be retried.                           |
| `retries` | `number` | The number of times to retry the function, defaults to 3.          |
| `delay`   | `number` | The delay in milliseconds between each retry, defaults to 1000 ms. |

## Returns

| Type                     | Description                                                                |
| ------------------------ | -------------------------------------------------------------------------- |
| `Promise<ReturnType<T>>` | A promise that resolves to the return value of the function being retried. |

## Errors

| Type    | Description                                     |
| ------- | ----------------------------------------------- |
| `Error` | Throws if the function fails after all retries. |
| `Error` | Throws if the number of retries is less than 1. |

## Examples

```typescript
async function fetchData(): Promise<string> {
  // An API call
}

const fetchWithRetry = retry(fetchData, 3, 1000)

fetchWithRetry()
  .then((data) => console.log(data)) // Will retry up to 3 times before failing
  .catch((error) => console.error(error))
```
