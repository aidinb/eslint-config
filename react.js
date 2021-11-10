module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:import/recommended',
        './index.js',
    ],
    plugins: [
        'react',
        'decorator-position',
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
            jsx: true,
        },
    },
    rules: {
        'decorator-position/decorator-position': [
            'error',
            {
                properties: 'above',
                methods: 'above',
            }
        ],
        'import/no-commonjs': 'error',
        'no-console': 'off',
        'react/jsx-key': 'off',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    }
}