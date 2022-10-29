module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json"
  },
  settings: {
    react: { version: "detect" }
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "simple-import-sort",
    "import",
    "unused-imports",
    "sort-destructure-keys",
    "sort-keys-custom-order",
    "import-access"
  ],
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "prettier" // prettierとeslintとの衝突回避
  ],

  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "always"],

    "no-var": "error",
    "unused-imports/no-unused-imports": "error",

    // For JS objects sorting
    "sort-keys-custom-order/object-keys": [
      "error",
      {
        orderedKeys: ["id"]
      }
    ],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": [
      "error",
      {
        orderedKeys: ["id"]
      }
    ],

    "import/no-default-export": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "sort-destructure-keys/sort-destructure-keys": 2,

    // react
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: false,
        checkInlineFunction: true
      }
    ],
    "react/destructuring-assignment": ["error", "always"],
    "react/prop-types": "off",

    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["classProperty", "method"], format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should"]
      }
    ]
  },

  overrides: [
    {
      files: ["src/pages/**/*.page.tsx", "src/pages/api/**/*.page.ts"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
          {
            selector: ["classProperty", "typeProperty", "method"],
            format: ["camelCase"]
          },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "has", "should"]
          }
        ]
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ],

  ignorePatterns: [".eslintrc.*"]
}
