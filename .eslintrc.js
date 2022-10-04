module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: 'airbnb-base',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'implicit-arrow-linebreak': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-unresolved': [2, { commonjs: true, amd: true, ignore: ['.jpeg$', '.jpg$', '.png$'] }],
        'import/prefer-default-export': 'off',
        'max-len': [2, 1000],
        indent: ['error', 4],
        '@typescript-eslint/no-unused-vars': 2,
        'no-console': 'off',
        'consistent-return': 'off',
        'class-methods-use-this': 'off',
        'array-callback-return': 'off',
        'no-param-reassign': 'off',
        'import/no-dynamic-require': 'off',
        'no-underscore-dangle': 'off',
        'func-names': ['error', 'never', { generators: 'as-needed' }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'global-require': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', '/src'],
            },
        },
    },
};
