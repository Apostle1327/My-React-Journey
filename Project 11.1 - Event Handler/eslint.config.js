import pkg from "eslint";
const { defineConfig } = pkg;

import babelParser from "@babel/eslint-parser";

export default defineConfig({
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: "writable",
    },
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
    "no-debugger": "warn",
    "prettier/prettier": [
      "error",
      { singleQuote: true, semi: true, useTabs: false },
    ],
    "no-undef": "warn",
    "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    eqeqeq: "warn",
    "consistent-return": "warn",
    "no-magic-numbers": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
