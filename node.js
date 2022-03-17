module.exports = {
    env: {
        node: true,
        mocha: true,
    },
    extends: [
        /**
         * Forked from eslint-plugin-node (no longer maintained).
         * @see https://github.com/weiran-zsd/eslint-plugin-node
         */
        'plugin:n/recommended',
        './index.js',
    ],
    rules: {
        'node/handle-callback-err': ['error', 'err'],
    }
}