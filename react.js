module.exports = {
    env: {
        browser: true,
        jest: true,
        es2022: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        './index.js',
    ],
    plugins: [
        'react',
        // 'decorator-position',
    ],
    settings: {
        react: {
            version: 'detect'
        },
        componentWrapperFunctions: [
            // Mobx observer
            'observer',
        ],
        linkComponents: [
            // Component used as alternative to <a> for linking, e.g. <Link to={url} />
            {
                name: 'Link',
                linkAttribute: 'to'
            },
        ],
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
            jsx: true,
        },
    },
    rules: {
        // TODO: implement when it supports Eslint 8
        // 'decorator-position/decorator-position': ['error', {
        //     properties: 'above',
        //     methods: 'above',
        // }],
        'import/no-commonjs': 'error',
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-curly-newline': ['error', {
            multiline: 'consistent',
            singleline: 'consistent'
        }],
        'react/jsx-curly-spacing': ['error', {
            when: 'never',
            children: true,
        }],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': ['error', {
            indentMode: 4,
            ignoreTernaryOperator: true,
        }],
        'react/jsx-max-props-per-line': ['error', {
            maximum: 2,
            when: 'multiline',
        }],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/display-name': 'off',
        'react/prop-types': 'off',
    }
}