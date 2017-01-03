var webpack = require('webpack');

module.exports = {
  entry: './src/Index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
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