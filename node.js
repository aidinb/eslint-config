module.exports = {
    env: {
        node: true,
        mocha: true,
    },
    extends: [
        /**
         * plugin-n is forked from eslint-plugin-node (which is no longer maintained)
         * @see https://github.com/weiran-zsd/eslint-plugin-node
         */
        'plugin:n/recommended',
        './index.js',
    ],
    rules: {
        'n/handle-callback-err': ['error', 'err'],
    }
}