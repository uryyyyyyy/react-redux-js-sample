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
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.jsx?$/, loader: "babel-loader" }
    ]
  }
}