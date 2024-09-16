# Function `convertCase`

Converts a string from one case type to another.

## Parameters

| Parameter  | Type     | Description                                                                                                                                                |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input      | string   | The input string to be converted.                                                                                                                          |
| inputType  | CaseType | The case type of the input string. Can be one of: `"camelCase"`, `"PascalCase"`, `"snake_case"`, `"SCREAMING_SNAKE_CASE"`, `"kebab-case"`, `"Train-Case"`. |
| outputType | CaseType | The desired case type for the output string. Can be one of the same values as `inputType`.                                                                 |

## Returns

| Type   | Description                                             |
| ------ | ------------------------------------------------------- |
| string | The converted string in the specified output case type. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Convert camelCase to snake_case
console.log(convertCase("myVariableName", "camelCase", "snake_case")) // "my_variable_name"

// Convert PascalCase to kebab-case
console.log(convertCase("MyVariableName", "PascalCase", "kebab-case")) // "my-variable-name"

// Convert snake_case to SCREAMING_SNAKE_CASE
console.log(convertCase("my_variable_name", "snake_case", "SCREAMING_SNAKE_CASE")) // "MY_VARIABLE_NAME"

// Convert kebab-case to PascalCase
console.log(convertCase("my-variable-name", "kebab-case", "PascalCase")) // "MyVariableName"

// Convert Train-Case to camelCase
console.log(convertCase("My-Variable-Name", "Train-Case", "camelCase")) // "myVariableName"
```
