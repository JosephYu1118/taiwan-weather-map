const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // off or 0 - 關閉該規則
    // warn or 1 - 將該規則顯示為警告，但仍可執行
    // error or 2 - 將該規則顯示為錯誤，會跳出錯誤後不執行，無法成功編譯
    'no-console': isProductionMode ? 'warn' : 'off',
    'no-debugger': isProductionMode ? 'warn' : 'off',
    'global-require': 'off',
    'max-len': ['error', { code: 150 }],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: [
        'webpack.common.js',
        'webpack.dev.js',
        'webpack.prod.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: [
            'webpack.common.js',
            'webpack.dev.js',
            'webpack.prod.js',
          ],
        }],
      },
    },
  ],
};
