// .eslintrc.js
module.exports = {
  root: true,
  parser: '@babel/eslint-parser', // Use babel parser for modern JavaScript features
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false, // Disable babel-eslint requirement
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    // Other extends...
    'plugin:prettier/recommended', // Add this line
    'plugin:react/recommended', // React-specific linting rules
    'plugin:react-hooks/recommended', // React Hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:import/errors', // Import/export rules
    'plugin:import/warnings',
    'plugin:import/typescript', // TypeScript support (if using TypeScript)
    'prettier', // Prettier for code formatting
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Disable rule if using React 18 and automatic JSX runtime
    'react/prop-types': 'off', // Disable prop-types if using TypeScript or prefer not to use them
    'import/no-unresolved': 'off', // Disable for Vite, as it handles imports
    'import/extensions': ['error', 'never'], // Enforce file extensions in import statements
    'jsx-a11y/anchor-is-valid': 'warn', // Warn on accessibility issues
    // Add or customize rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
