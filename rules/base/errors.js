module.exports = {
    rules: {
        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'off',

        // disallow use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': 'error',

        // disallow use of debugger
        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // Disallows expressions where the operation doesn't affect the value
        // https://eslint.org/docs/rules/no-constant-binary-expression
        'no-constant-binary-expression': 'error',
    },
};
