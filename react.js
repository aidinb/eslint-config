module.exports = {
    env: {
        browser: true,
        jest: true,
        es2022: true,
    },
    globals: {
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
    },
    plugins: [
        'react',
        'decorator-position',
        'mobx',
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
        './index.js',
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
        'decorator-position/decorator-position': ['error', {
            properties: 'above',
            methods: 'above',
        }],
        'import/no-commonjs': 'error',
        'mobx/missing-make-observable': 'error',
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
        // 'react/jsx-max-depth': ['error', {
        //     max: 5,
        // }],
        'react/jsx-max-props-per-line': ['error', {
            maximum: 2,
            when: 'multiline',
        }],
        // 'react/jsx-newline': ['error', {
        //     prevent: true,
        //     allowMultilines: true,
        // }],
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/self-closing-comp': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    }
}