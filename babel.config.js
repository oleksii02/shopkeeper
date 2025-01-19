module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./src/'],
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    '@': './src',
                },
            },
        ],
        [
            'module:react-native-dotenv',
            {
                moduleName: 'env',
                path: '.env',
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
