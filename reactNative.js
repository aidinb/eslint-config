module.exports = {
    env: {
        browser: true,
        es2021: true,
        "react-native/react-native": true
    },
    extends: [
        "plugin:eqeqeq-fix/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        'plugin:react/jsx-runtime',
        "prettier",
        './react.js',
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
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
        "react-native",
        "unused-imports",
    ],
    rules: {
        "import/named": "off",
        "import/namespace": "off",
        "import/no-named-as-default-member": "off",
        "no-unneeded-ternary": 'error',
        "react/jsx-no-leaked-render": 'error', // check and fix if there is && in render which makes the render leak
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "unused-imports/no-unused-imports": "error",
        "unicorn/prefer-logical-operator-over-ternary": "off",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }

        ],
        "@typescript-eslint/naming-convention": "off",


        // Try to make them ON as soon as possible by fixing the code
        "array-callback-return": "off",
        "camelcase": "off",
        "consistent-return": "off",
        "import/no-unresolved": "off",
        "import/default": "off",
        "no-nested-ternary": "off",
        "no-await-in-loop": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/no-unstable-nested-components": "off",

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
}

