// package/.eslintrc.js
// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:prettier/recommended",
    ],
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: "module", 
    }, 
    "ignore": ["../docs/"],
    rules: {
     "prettier/prettier": "error",
     "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
     "no-undef": "error",
     "no-console": ["warn", { allow: ["warn", "error"] }],
     "no-fallthrough": "error",
     "indent": ["error", 2, { "SwitchCase": 1 }],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-alert": "warn",
      "no-return-await": "error",
      "no-var": "error",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-arrow-callback": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "import/newline-after-import": "error",
      "import/no-unresolved": "error",
      "import/no-duplicates": "error"
    },
  };
  