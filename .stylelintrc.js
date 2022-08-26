module.exports = {
  extends: '@xunserver/stylelint-config/vue',
  rules: {
    'scss/at-import-no-partial-leading-underscore': [
      true,
      {
        severity: 'warning',
      },
    ],
    'annotation-no-unknown': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}
