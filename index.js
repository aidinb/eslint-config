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
        experimentalDecorators: true,
    },
    parser: "babel-eslint",
    extends: "eslint:recommended",
    rules: {
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 2
            }
        ],
        // 'space-in-parens': [],
        "space-before-function-paren": [
            "error", {
                "anonymous": "never",
                named: "never",
                "asyncArrow": "always"
            }
        ],
        'func-call-spacing': [
            "error", 
            "never"
        ],
        'comma-spacing': [
            'error', 
            { 
                before: false, 
                after: true 
            }
        ],
        'quote-props': [
            1, 
            'consistent-as-needed', 
            { 
                'numbers': true 
            }
        ],
        'array-element-newline': [
            'error', 
            { 
                'multiline': true,
                'minItems': 4,
            }
        ],
        'array-bracket-newline': [
            'error', 
            {
                multiline: true,
                minItems: 4,
            }
        ],
        'keyword-spacing': [
            "error", { 
                "before": true, 
                after: true,
                // "overrides": {
                //     "describe": { "after": false },
                // }
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
        //         // "mode": 'minimum',
        //         "multiLine": {
        //             "beforeColon": false,
        //             "afterColon": true,
        //             'mode': 'minimum',
        //         },
        //         "align": {
        //             "beforeColon": true,
        //             "afterColon": true,
        //             "on": "colon"
        //         }
        //     }
        // ],
        'no-multi-spaces': [
            'error',
            {
                exceptions: {
                    'Property': true,
                    'VariableDeclarator': true,
                    'ImportDeclaration': true,  
                },
                'ignoreEOLComments': true,
            }
        ],
        'object-curly-spacing': [
            'error', 
            'always'
        ],
        'object-property-newline': [
            'error', 
            { 
                'allowMultiplePropertiesPerLine': false, 
            }
        ],
        'array-bracket-spacing': [ 'off', 'always'],
        'object-curly-newline': [
            'error', 
            {
                multiline: true,
                minProperties: 2,
                consistent: true,
            }
        ],
        'object-property-newline': [
            'warn',
            { 
                'allowAllPropertiesOnSameLine': true 
            }
        ],
        'comma-dangle': ['off', 'always'],
        'no-var': 'error',
        'no-unused-vars': 'off',
        'no-console': 'error',
        'indent': [
            'warn',
            4,
            {
                MemberExpression: 'off',
                SwitchCase: 1
            }
        ],
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
        'linebreak-style': [
            'off',
            'unix'
        ],
        'quotes': [
            'warn',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: false
            }
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}