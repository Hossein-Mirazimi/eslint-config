module.exports = {
    rules: {
        // require return statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'off',

        // disallow usage of expressions in statement position
        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],

        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // rule: https://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'app', // for vue plugins
                'acc', // for reduce accumulators
                'accumulator', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'context', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
                'staticContext', // for ReactRouter context
            ],
        }],

        // disallow the use of alert, confirm, and prompt
        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'error',
    },
};
