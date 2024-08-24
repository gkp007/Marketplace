module.exports = {
  root: true,
  extends: '@react-native',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:node/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    'no-unused-vars': 'error',
    'spaced-comment': 'off',
    'no-console': 'warn',
    'consistent-return': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'no-process-exit': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': ['error', {object: true, array: false}],
    'no-unused-vars': ['error', {argsIgnorePattern: 'req|res|next|val'}],
  },
  globals: {
    jest: true,
  },
};
