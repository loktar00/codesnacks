module.exports = {
    env: {
        browser: false,
        commonjs: true,
        es2021: true
    },
    extends: [
        'airbnb-base'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4]
    }
};
