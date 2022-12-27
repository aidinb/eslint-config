module.exports = {
    env: {
        browser: true,
        es2021: true,
        "react-native/react-native": true
    },
    extends: [
        './react.js',
        "plugin:react-native/all"
    ],
    plugins: [
        "react-native",
        "unused-imports",
    ],
    rules: {
        "no-unneeded-ternary": 'error',
        "react/jsx-no-leaked-render": 'error', // check and fix if there is && in render which makes the render leak
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "error",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }

        ],



        // More Rules for future

        // "import/order": "off",
        // "class-methods-use-this": "off",
        // "no-return-await": "off",
        // "no-console": "off",
        // "react/destructuring-assignment": "off",
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
        // "no-underscore-dangle": "off",
        // "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    },
}

