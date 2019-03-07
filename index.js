module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },

  rules: {
    'semicolon': [true, 'always'],
    'indent': [true, 'tabs'],
    // 'no-undef': 'warn',
    // 'no-global-assign': 'warn',
    'trailing-comma': [true, { multiline: 'always', singleline: 'never' }],
    'no-trailing-whitespace': true,
    // 'brace-style': 'warn',
    'quotemark': [true, 'single', 'avoid-escape', 'avoid-template'],
    // 'no-useless-return': 'error',
    // 'brace-style': ['error', '1tbs', {
    //   allowSingleLine: true
    // }],
  }
}