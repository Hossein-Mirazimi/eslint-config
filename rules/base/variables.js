module.exports = {
    rules: {
        // disallow declaration of variables already declared in the outer scope
        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': 'off',

        // disallow use of variables before they are defined
        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': ['off', { functions: true, classes: true, variables: true }],
    },
};
