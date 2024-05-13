/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: []
    }],
    "vue/padding-line-between-tags": ["error", [
      { "blankLine": "always", "prev": "*", "next": "*" }
    ]],
    "vue/padding-line-between-blocks": ["error", "always"]
  }
};
