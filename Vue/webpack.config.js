module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
        publicPath: '/public'
    },
};
