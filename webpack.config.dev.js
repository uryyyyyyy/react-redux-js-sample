module.exports = {
  entry: './src/Index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js"]
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