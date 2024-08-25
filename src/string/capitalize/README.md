# Function `capitalize`

Capitalizes the first letter of each word in a string, excluding specified stopwords.

## Parameters

| Parameter   | Type       | Description                                                    |
| ----------- | ---------- | -------------------------------------------------------------- |
| `input`     | `string`   | The input string to capitalize.                                |
| `stopwords` | `string[]` | An optional array of stopwords to exclude from capitalization. |

## Returns

| Type     | Description             |
| -------- | ----------------------- |
| `string` | The capitalized string. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const sentence = "the quick brown fox jumps over the lazy dog"
const stopwords = ["the", "over"]
const result = capitalize(sentence, stopwords)
console.log(result) // "The Quick Brown Fox jumps over the Lazy Dog"

const sentenceWithoutStopwords = "hello world"
const resultWithoutStopwords = capitalize(sentenceWithoutStopwords)
console.log(resultWithoutStopwords) // "Hello World"
```
