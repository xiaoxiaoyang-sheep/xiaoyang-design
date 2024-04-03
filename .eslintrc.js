module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unknown-property': 'off',
    'react/button-has-type': 'off',
  },
};
