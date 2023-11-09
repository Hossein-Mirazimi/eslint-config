module.exports = {
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            plugins: ['yml'],
            extends: ['plugin:yml/standard'],
            rules: {
                'yml/indent': ['error', 2],
                'no-multi-spaces': 0,
                'yml/spaced-comment': 0,
            },
        },
    ],
};
