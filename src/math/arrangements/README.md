# Functions `nCr` and `nPr`

These functions calculate the number of combinations (nCr) and permutations (nPr) for given values of `n` and `r`.

## Function `nCr`

Calculates the number of combinations (nCr) for given values of `n` and `r`.

### Parameters

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| `n`       | `number` | The total number of items.          |
| `r`       | `number` | The number of items to be selected. |

### Returns

| Type     | Description                 |
| -------- | --------------------------- |
| `number` | The number of combinations. |

### Errors

| Type    | Description                                |
| ------- | ------------------------------------------ |
| `Error` | Thrown if `n` or `r` is a negative number. |
| `Error` | Thrown if `n` or `r` is not an integer.    |
| `Error` | Thrown if `r` is greater than `n`.         |

### Examples

```typescript
const combinations = nCr(5, 2)
console.log(combinations) // 10
```

## Function `nPr`

Calculates the number of permutations of `n` items taken `r` at a time.

### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `n`       | `number` | The total number of items.           |
| `r`       | `number` | The number of items taken at a time. |

### Returns

| Type     | Description                 |
| -------- | --------------------------- |
| `number` | The number of permutations. |

### Errors

| Type    | Description                                |
| ------- | ------------------------------------------ |
| `Error` | Thrown if `n` or `r` is a negative number. |
| `Error` | Thrown if `n` or `r` is not an integer.    |
| `Error` | Thrown if `r` is greater than `n`.         |

### Examples

```typescript
const permutations = nPr(5, 2)
console.log(permutations) // 20
```
