import { describe, expect, it } from "vitest"
import convertCase from "./convert-case"

type CaseType = "camelCase" | "PascalCase" | "snake_case" | "kebab-case" | "SCREAMING_SNAKE_CASE" | "Train-Case"

describe("convertCase function", () => {
  const testCases: { input: string; inputType: CaseType; outputType: CaseType; expected: string }[] = [
    // camelCase tests
    { input: "helloWorld", inputType: "camelCase", outputType: "PascalCase", expected: "HelloWorld" },
    { input: "helloWorld", inputType: "camelCase", outputType: "snake_case", expected: "hello_world" },
    { input: "helloWorld", inputType: "camelCase", outputType: "kebab-case", expected: "hello-world" },
    { input: "helloWorld", inputType: "camelCase", outputType: "SCREAMING_SNAKE_CASE", expected: "HELLO_WORLD" },
    { input: "helloWorld", inputType: "camelCase", outputType: "Train-Case", expected: "Hello-World" },

    // PascalCase tests
    { input: "HelloWorld", inputType: "PascalCase", outputType: "camelCase", expected: "helloWorld" },
    { input: "HelloWorld", inputType: "PascalCase", outputType: "snake_case", expected: "hello_world" },
    { input: "HelloWorld", inputType: "PascalCase", outputType: "kebab-case", expected: "hello-world" },
    { input: "HelloWorld", inputType: "PascalCase", outputType: "SCREAMING_SNAKE_CASE", expected: "HELLO_WORLD" },
    { input: "HelloWorld", inputType: "PascalCase", outputType: "Train-Case", expected: "Hello-World" },

    // snake_case tests
    { input: "hello_world", inputType: "snake_case", outputType: "camelCase", expected: "helloWorld" },
    { input: "hello_world", inputType: "snake_case", outputType: "PascalCase", expected: "HelloWorld" },
    { input: "hello_world", inputType: "snake_case", outputType: "kebab-case", expected: "hello-world" },
    { input: "hello_world", inputType: "snake_case", outputType: "SCREAMING_SNAKE_CASE", expected: "HELLO_WORLD" },
    { input: "hello_world", inputType: "snake_case", outputType: "Train-Case", expected: "Hello-World" },

    // kebab-case tests
    { input: "hello-world", inputType: "kebab-case", outputType: "camelCase", expected: "helloWorld" },
    { input: "hello-world", inputType: "kebab-case", outputType: "PascalCase", expected: "HelloWorld" },
    { input: "hello-world", inputType: "kebab-case", outputType: "snake_case", expected: "hello_world" },
    { input: "hello-world", inputType: "kebab-case", outputType: "SCREAMING_SNAKE_CASE", expected: "HELLO_WORLD" },
    { input: "hello-world", inputType: "kebab-case", outputType: "Train-Case", expected: "Hello-World" },

    // SCREAMING_SNAKE_CASE tests
    { input: "HELLO_WORLD", inputType: "SCREAMING_SNAKE_CASE", outputType: "camelCase", expected: "helloWorld" },
    { input: "HELLO_WORLD", inputType: "SCREAMING_SNAKE_CASE", outputType: "PascalCase", expected: "HelloWorld" },
    { input: "HELLO_WORLD", inputType: "SCREAMING_SNAKE_CASE", outputType: "snake_case", expected: "hello_world" },
    { input: "HELLO_WORLD", inputType: "SCREAMING_SNAKE_CASE", outputType: "kebab-case", expected: "hello-world" },
    { input: "HELLO_WORLD", inputType: "SCREAMING_SNAKE_CASE", outputType: "Train-Case", expected: "Hello-World" },

    // Train-Case tests
    { input: "Hello-World", inputType: "Train-Case", outputType: "camelCase", expected: "helloWorld" },
    { input: "Hello-World", inputType: "Train-Case", outputType: "PascalCase", expected: "HelloWorld" },
    { input: "Hello-World", inputType: "Train-Case", outputType: "snake_case", expected: "hello_world" },
    { input: "Hello-World", inputType: "Train-Case", outputType: "SCREAMING_SNAKE_CASE", expected: "HELLO_WORLD" },
    { input: "Hello-World", inputType: "Train-Case", outputType: "kebab-case", expected: "hello-world" },
  ]

  testCases.forEach(({ input, inputType, outputType, expected }) => {
    it(`should convert '${input}' from ${inputType} to ${outputType}`, () => {
      expect(convertCase(input, inputType, outputType)).toBe(expected)
    })
  })

  it("should return an empty string when input is empty", () => {
    expect(convertCase("", "camelCase", "PascalCase")).toBe("")
    expect(convertCase("", "snake_case", "kebab-case")).toBe("")
  })

  it("should handle a single word correctly", () => {
    expect(convertCase("word", "camelCase", "snake_case")).toBe("word")
    expect(convertCase("word", "PascalCase", "SCREAMING_SNAKE_CASE")).toBe("WORD")
  })
})
