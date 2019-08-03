module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended', // Recommended rules from ESLint https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    'plugin:react/recommended', // React specific linting rules for ESLint
    'plugin:@typescript-eslint/eslint-recommended', // disables rules from eslint:recommended which are already handled by TypeScript. 
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier',  // Turns off all rules that are unnecessary or might conflict with Prettier.
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "prettier/prettier": 'error',
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
