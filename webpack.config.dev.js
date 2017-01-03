module.exports = {
  entry: './src/Index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  performance: {
    hints:false
  }
};