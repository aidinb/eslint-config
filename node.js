module.exports = {
    env: {
        node: true,
        mocha: true,
    },
    extends: [
        'plugin:node/recommended',
        './index.js',
    ],
}