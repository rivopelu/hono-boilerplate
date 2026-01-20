import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  splitting: false,
  clean: true,
  dts: false,
  sourcemap: true,
  // Externalize packages that use CommonJS dynamic require
  external: ["winston", "winston-transport"],
  // Add shim for require in ESM
  banner: {
    js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
  },
});
