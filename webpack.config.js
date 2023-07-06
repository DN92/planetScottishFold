module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'icon-maker'
      },
      {
        test: /\.json5$/,
        loader: 'json5-loader',
        type: 'javascript/auto', // Specify the type to avoid webpack warning
      },
    ]
  }
}
