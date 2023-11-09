module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false,
        allowImportExportEverywhere: true,
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
    },
};
