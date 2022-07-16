module.exports = {
    env: {
        node: true,
        mocha: true,
    },
    extends: [
        /**
         * plugin-in is forked from eslint-plugin-node (which is no longer maintained)
         * @see https://github.com/weiran-zsd/eslint-plugin-node
         */
        'plugin:n/recommended',
        './index.js',
    ],
    rules: {
        'node/handle-callback-err': ['error', 'err'],
    }
}