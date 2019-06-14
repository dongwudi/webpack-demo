module.exports = {
    mode: 'production',
    entry: {
        index1: './src/index1.js',
        index2: './src/index2.js'
    },
    output: {
        filename: '[name].bundle.js'
    }
}