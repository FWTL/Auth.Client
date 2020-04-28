module.exports = {
  root: true,
  ignorePatterns: ["/src/api/", "node_modules/"],
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars' : 'off',
    'no-empty' : 'off',
    "vue/component-name-in-template-casing": "error",
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline" : "off"
  }
}
