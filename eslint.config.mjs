import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      // Pin React version so eslint-plugin-react skips auto-detection,
      // which still calls APIs removed in ESLint 10 (context.getFilename).
      // See https://github.com/jsx-eslint/eslint-plugin-react/issues/3977
      react: { version: "19.2.5" },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
