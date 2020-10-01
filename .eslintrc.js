module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 'off',
    'func-names': 'off',
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-plusplus': 'off',
    'no-var': 'off',
    'object-shorthand': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-template': 'off',
    'semi': 'warn',
    'vars-on-top': 'off',
    'no-restricted-syntax': 'off',
    'prefer-destructuring': 'off',
  },
};