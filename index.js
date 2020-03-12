module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
        },
    },
    parser: 'babel-eslint',
    extends: 'eslint:recommended',
    rules: {
        'array-bracket-newline': [
            'error',
            {
                multiline: true,
                minItems: 4,
            }
        ],
        'array-bracket-spacing': 'off',
        'array-element-newline': [
            'error',
            'consistent',
            // {
            //     multiline: true,
            //     minItems: 4,
            // }
        ],
        'brace-style': [
            'error',
            '1tbs',
        ],
        'comma-dangle': [
            'error', 
            'always',
        ],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            }
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'function-paren-newline': [
            'error', 
            'consistent' // instead of 'multiline'
        ],
        'indent': [
            'warn',
            4,
            {
                MemberExpression: 'off',
                SwitchCase: 1,
            }
        ],
        /**
         * Temporarily disable because there are
         * no rules that cover our needs
         */
        'key-spacing': [
            'error',
            {
                afterColon: true,
                mode: 'minimum',
            }
        ],
        // 'key-spacing': [
        //     'error', 
        //     { 
        //         // mode: 'minimum',
        //         multiLine: {
        //             beforeColon: false,
        //             afterColon: true,
        //             mode: 'minimum',
        //         },
        //         align: {
        //             beforeColon: true,
        //             afterColon: true,
        //             on: 'colon',
        //         }
        //     }
        // ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                // overrides: {
                //     describe: { after: false },
                // },
            }
        ],
        'linebreak-style': 'off',
        'max-len': [
            'warn',
            {
                code: 140,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
            }
        ],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 2,
            }
        ],
        'no-console': 'error',
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    Property: true,
                    VariableDeclarator: true,
                    ImportDeclaration: true,
                },
                ignoreEOLComments: true,
            }
        ],
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-vars': 'off',
        'no-var': 'error',
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                minProperties: 2,
                consistent: true,
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            }
        ],
        'quote-props': [
            'warn',
            'consistent-as-needed',
            {
                numbers: true,
            }
        ],
        'quotes': [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: false,
            }
        ],
        'require-await': 'error',
        'space-before-blocks': [
            'error', 
            'always'
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            }
        ],
        // 'space-in-parens': [],
        'space-infix-ops': 'error',
        'semi': [
            'error',
            'never'
        ],
    }
}