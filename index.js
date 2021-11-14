module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
        },
    },
    parser: '@babel/eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
    ],
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'off',
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': ['error', {
            before: true,
            after: true,
        }],
        'brace-style': ['error', '1tbs'],
        'camelcase': ['error', {
            ignoreDestructuring: true,
            ignoreImports: true,
            allow: ['/A-Z/', '^vehicle_lpn$'],
        }],
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'function-paren-newline': ['error', 'consistent'],
        'indent': ['warn', 4, {
            MemberExpression: 'off',
            SwitchCase: 1,
        }],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
        }],
        'linebreak-style': 'off',
        'lines-between-class-members': ['error', 'always'],
        'max-len': ['warn', {
            code: 140,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
        }],
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3,
        }],
        'no-console': 'error',
        'no-multiple-empty-lines': ['error', {
            max: 1,
        }],
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
            exceptions: {
                Property: false,
                VariableDeclarator: false,
                ImportDeclaration: false,
            },
        }],
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-vars': 'off',
        'no-var': 'error',
        'object-curly-newline': ['error', {
            consistent: true,
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'padded-blocks': ['error', 'never'],
        'prefer-const': 'error',
        'quote-props': ['warn', 'consistent-as-needed', {
            numbers: true,
        }],
        'quotes': ['warn', 'single', {
            allowTemplateLiterals: true,
            avoidEscape: false,
        }],
        'require-await': 'error',
        'semi': ['error', 'never'],
        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-infix-ops': 'error',
        'switch-colon-spacing': 'error',
    }
}