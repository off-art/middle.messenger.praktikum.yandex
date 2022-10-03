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

const props = {
    name: 'Abby',
    chat: 'the last of us. Part II',
    getChat() {
        this._privateMethod();
    },
    _privateMethod() {
        console.log(this._privateProp);
    },
    __privateMethodToo() {},
    _privateProp: 'Нельзя получить просто так',
};

const proxyProps = new Proxy(props, {
    get(target, prop) {
        if (prop.indexOf('_') === 0) {
            throw new Error('Нет прав');
        }

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    deleteProperty(target, prop) {
        if (prop.indexOf('_') === 0) {
            throw new Error('Нет прав');
        }
        delete target[prop];

        return true;
    },
});

proxyProps.getChat();

delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
    proxyProps._newPrivateProp = 'Super game';
} catch (error) {
    console.log(error);
}

try {
    delete proxyProps._privateProp;
} catch (error) {
    console.log(error); // Error: Нет прав
}

/*
 * Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/
