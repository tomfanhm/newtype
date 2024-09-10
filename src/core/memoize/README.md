# Function `memoize`

Memoizes a function to cache its results based on the arguments passed. This helps optimize performance by avoiding redundant function executions for the same arguments.

## Parameters

| Parameter | Type | Description                  |
| --------- | ---- | ---------------------------- |
| `fn`      | `T`  | The function to be memoized. |

## Returns

| Type | Description                                                                     |
| ---- | ------------------------------------------------------------------------------- |
| `T`  | The memoized function, which caches results for repeated argument combinations. |

## Errors

The function does not throw any custom errors, but may propagate errors from the provided `fn`.

## Examples

```typescript
function add(a: number, b: number): number {
  return a + b
}

const memoizedAdd = memoize(add)

console.log(memoizedAdd(1, 2)) // Computed: 3
console.log(memoizedAdd(1, 2)) // Cached: 3
console.log(memoizedAdd(2, 3)) // Computed: 5
```
