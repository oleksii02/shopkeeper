module.exports = {
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrder: [
        'react',
        'redux',
        '.*Styles.*',
        '@/state',
        '@/contants',
        '@/types',
        '@/screens',
        '@/components',
        '@/utils',
        '<THIRD_PARTY_MODULES>',
    ],
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
    tabWidth: 2,
    bracketSameLine: false,
};
