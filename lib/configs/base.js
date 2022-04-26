module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: 0,
    'no-undef': 'off',
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-closing-bracket-location': 1,
    'jsx-quotes': [1, 'prefer-single'],
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react-hooks/no-undef': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/order': [ 'error',  {
      groups: [
        'builtin',
        'external',
        'internal',
        'object',
        'type',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
        },
      ],
    }],
    'react/self-closing-comp': ['error']
  },
}
