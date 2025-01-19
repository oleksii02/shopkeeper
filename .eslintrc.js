module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react-native/no-inline-styles': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'dir', 'log'] }],
        'react/react-in-jsx-scope': 'off',
    },
    ignorePatterns: [
        'android',
        'ios',
        'vendor',
        '.yarn',
        '.bundle',
        '**/.lintstagedrc.js',
    ],
};
