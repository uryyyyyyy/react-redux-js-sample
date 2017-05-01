module.exports = {
  entry: './src/Index.jsx',
  output: {
    filename: './dist/bundle.js'
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
  }
}
