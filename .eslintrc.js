module.exports = {
  env: {
    jest: true,
    node: true,
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    '@typescript-eslint/indent': [2, 2],
    'prettier/prettier': 'error',
  },
};
