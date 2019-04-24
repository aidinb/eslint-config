module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'plugin:react/recommended',
        './index.js',
    ],
    plugins: [
        'react',
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
            jsx: true,
        },
    },
    rules: {
        'no-console': 'off',
        // Although it's nice to have, we don't want to force prop-type
        // declaration as we haven't done it at all so far
        'react/prop-types': 'off',
    }
}