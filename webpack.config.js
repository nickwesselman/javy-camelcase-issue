const path = require('path');
module.exports = {
  mode: 'development',
  target: 'es2019',
  optimization: {
    sideEffects: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    libraryTarget: "umd",
    globalObject: 'this',
    filename: 'index.js',
    path: path.join(__dirname, "build"),
    chunkFormat: 'array-push'
  },
};
