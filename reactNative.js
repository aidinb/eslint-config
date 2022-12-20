module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
        "plugin:eqeqeq-fix/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    overrides: [
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        "react",
        "react-native",
        "unused-imports"
    ],
    rules: {
        "react/prop-types": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-filename-extension": "off",
        "import/prefer-default-export": "off",
        "import/no-cycle": "off",
        "no-shadow": "off",
        "camelcase": "off",
        "no-return-assign": "off",
        "global-require": "off",
        "import/order": "off",
        "class-methods-use-this": "off",
        "no-return-await": "off",
        "no-console": "off",
        "import/named": "off",
        "react/jsx-props-no-spreading": "off",
        "no-use-before-define": "off",
        "import/no-import-module-exports": "off",
        "react/no-array-index-key": "off",
        "no-alert": "off",

        "no-param-reassign": "off",
        "prefer-destructuring": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-underscore-dangle": "off",
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }

        ],
        // Try to make them ON as soon as possible by fixing the code
        "import/no-unresolved": "off",
        "no-nested-ternary": "off",
        "import/default": "off",
        "react-hooks/exhaustive-deps": "off",
        "no-await-in-loop": "off",
        "react/no-unstable-nested-components": "off",
        "consistent-return": "off",
        "array-callback-return": "off",

    },
};

/*
* For using this linter file required to install below packages
*
* "devDependencies": {
        "@babel/eslint-parser": "^7.19.1",
        "eslint": "^8.30.0",
        "eslint-config-airbnb": "^19.0.4",
        "eslint-config-prettier": "^8.5.0",
        "eslint-config-standard": "^17.0.0",
        "eslint-plugin-communist-spelling": "^1.0.0",
        "eslint-plugin-decorator-position": "^5.0.1",
        "eslint-plugin-eqeqeq-fix": "^1.0.3",
        "eslint-plugin-import": "^2.26.0",
        "eslint-plugin-jsx-a11y": "^6.6.1",
        "eslint-plugin-mobx": "0.0.9",
        "eslint-plugin-n": "^15.6.0",
        "eslint-plugin-promise": "^6.1.1",
        "eslint-plugin-react": "^7.31.11",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-native": "^4.0.0",
        "eslint-plugin-unicorn": "^45.0.2",
        "eslint-plugin-unused-imports": "^2.0.0"
    },
*
* */
