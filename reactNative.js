module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard",
        "prettier",
        "plugin:eqeqeq-fix/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
    ],
    overrides: [
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
            experimentalDecorators: true,
            jsx: true,
        },
    },
    plugins: [
        "react",
        "react-native",
        "unused-imports",
        'decorator-position',
        'mobx',
    ],
    rules: {
        'decorator-position/decorator-position': ['error', {
            properties: 'above',
            methods: 'above',
        }],
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
        'react/self-closing-comp': 'error',
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }

        ],
        'react/jsx-indent': ['error', 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        'react/jsx-indent-props': ['error', {
            indentMode: 4,
            ignoreTernaryOperator: true,
        }],
        "no-unneeded-ternary": 2,
        "react/jsx-no-leaked-render": 2, // check and fix if there is && in render which makes the render leak
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",


        // Try to make them ON as soon as possible by fixing the code
        "react/prop-types": "off",
        "import/no-unresolved": "off",
        "no-nested-ternary": "off",
        "import/default": "off",
        "react-hooks/exhaustive-deps": "off",
        "no-await-in-loop": "off",
        "react/no-unstable-nested-components": "off",
        "consistent-return": "off",
        "array-callback-return": "off",
        "camelcase": "off",

        // More Rules for future

        // "global-require": "off",
        // "import/order": "off",
        // "class-methods-use-this": "off",
        // "no-return-await": "off",
        // "no-console": "off",
        // "react/destructuring-assignment": "off",
        // "react/jsx-filename-extension": "off",
        // "import/prefer-default-export": "off",
        // "import/no-cycle": "off",
        // "no-shadow": "off",
        // "react/jsx-props-no-spreading": "off",
        // "no-use-before-define": "off",
        // "import/no-import-module-exports": "off",
        // "react/no-array-index-key": "off",
        // "no-alert": "off",
        // "no-param-reassign": "off",
        // "prefer-destructuring": "off",
        // "no-plusplus": "off",
        // "no-restricted-syntax": "off",
        // "no-underscore-dangle": "off",
        // "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // It will default to "latest" and warn if missing, and to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
    }
};

/*
* For using this linter file required to install below packages
*
* "devDependencies": {
        "@babel/eslint-parser": "^7.19.1",
        "eslint": "^8.30.0",
        "eslint-config-standard": "^19.0.4",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-communist-spelling": "^1.0.0",
        "eslint-plugin-decorator-position": "^5.0.1",
        "eslint-plugin-eqeqeq-fix": "^1.0.3",
        "eslint-plugin-import": "^2.26.0",
        "eslint-plugin-jsx-a11y": "^6.6.1",
        "eslint-plugin-mobx": "0.0.9",
        "eslint-plugin-promise": "^6.1.1",
        "eslint-plugin-react": "^7.31.11",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-native": "^4.0.0",
        "eslint-plugin-unused-imports": "^2.0.0"
    },
*
* */
