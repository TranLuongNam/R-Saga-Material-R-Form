module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 1,
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': ['error'],
    'no-unused-vars': 1,
    'import/order': 1,
    'import/extensions': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'react/state-in-constructor': 0,
    "lines-between-class-members":0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },

  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};