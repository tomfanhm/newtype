import { readFileSync } from "fs"
import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import tsconfigPaths from "vite-tsconfig-paths"

const packageJson = JSON.parse(readFileSync("./package.json", { encoding: "utf-8" }))

const globals = {
  ...(packageJson.dependencies || {}),
}

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: resolve("./src/index.ts"),
      fileName: (format, entryName) => `${entryName}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [...Object.keys(globals)],
      input: {
        index: resolve("./src/index.ts"),
        array: resolve("./src/array/index.ts"),
        core: resolve("./src/core/index.ts"),
        date: resolve("./src/date/index.ts"),
        math: resolve("./src/math/index.ts"),
        regex: resolve("./src/regex/index.ts"),
        string: resolve("./src/string/index.ts"),
        system: resolve("./src/system/index.ts"),
      },
    },
  },
  plugins: [
    dts({
      exclude: ["**/*.test.ts", "demo/**/*"],
    }),
    tsconfigPaths(),
  ],
})
