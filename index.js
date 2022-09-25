module.exports = {
    env: {
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'communist-spelling',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
    ],
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-callback-return': ['error', {
            allowImplicit: true,
        }],
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': ['error', {
            before: true,
            after: true,
        }],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'only-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
        }],
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'curly': ['error', 'multi-line'],
        'default-case': ['error', {
            commentPattern: '^no default$',
        }],
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': ['error', 'always'],
        'eqeqeq': ['error', 'always', {
            null: 'ignore',
        }],
        'func-call-spacing': ['error', 'never'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'consistent'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true,
        }],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],
        'max-len': ['error', {
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
        'no-console': 'off',
        'no-else-return': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-mixed-operators': ['error', {
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['/', '*'],
                ['&', '|', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: true,
        }],
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxBOF: 0,
            maxEOF: 0,
        }],
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
            exceptions: {
                Property: false,
                VariableDeclarator: false,
                ImportDeclaration: false,
            },
        }],
        'no-nested-ternary': 'error',
        'no-return-assign': 'error',
        'no-tabs': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-unneeded-ternary': ['error', {
            defaultAssignment: false,
        }],
        'no-unused-vars': 'off',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', {
            consistent: true,
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],
        'object-shorthand': 'error',
        'one-var': ['error', {
            initialized: 'never',
            uninitialized: 'consecutive',
        }],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'prefer-const': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed', {
            numbers: true,
        }],
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true,
            avoidEscape: false,
        }],
        'require-await': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'semi': ['error', 'never'],
        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always', {
            exceptions: ['*'],
            block: {
                balanced: true,
            },
        }],
        'switch-colon-spacing': 'error',
        'unicode-bom': ['error', 'never'],
        'yoda': 'error',

        'unicorn/catch-error-name': ['error', {
            name: 'err',
        }],
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/new-for-builtins': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-lonely-if': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-object-as-default-parameter': 'off',
        'unicorn/no-this-assignment': 'off',
        'unicorn/no-zero-fractions': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/prefer-object-from-entries': 'off',
        'unicorn/prefer-set-has': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-switch': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/throw-new-error': 'off',
        'unicorn/prevent-abbreviations': 'off',

        'communist-spelling/communist-spelling': ['error', {
            ignoreDestructuring: true,
        }],

        // @typescript-eslint/parser specific rules
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            // indentations with decorators are broken in eslint 8. https://github.com/typescript-eslint/typescript-eslint/issues/1824
            ignoredNodes: [
                'PropertyDefinition[decorators]',
            ],
        }],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase'],
                filter: {
                    regex: '^(_|_id|IS_TEST_VERSION)$',
                    match: false
                },
            },
            {
                // TODO: allow PascalCase only if variable contains JSX element
                selector: 'variable',
                modifiers: ['global'],
                format: ['camelCase', 'UPPER_CASE'],
            },
            {
                selector: 'variable',
                modifiers: ['destructured'],
                format: null,
            },
            {
                // TODO: allow PascalCase only if function returns JSX element
                selector: 'function',
                modifiers: ['global'],
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: ['typeLike', 'enumMember'],
                format: ['PascalCase'],
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: [
                  'classProperty',
                  'objectLiteralProperty',
                  'typeProperty',
                  'classMethod',
                  'objectLiteralMethod',
                  'typeMethod',
                  'accessor',
                  'enumMember'
                ],
                modifiers: ['requiresQuotes'],
                format: null,
            },
            // TODO: force prefix on booleans?
            // {
            //     selector: ['variable', 'parameter', 'property', 'accessor'],
            //     types: ['boolean'],
            //     format: ['PascalCase'],
            //     prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will'],
            // },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': ['error', {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
        }],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    }
}