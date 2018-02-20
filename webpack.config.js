var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:[
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery' : 'jquery'
    })
  ],
  output: {
    publicPath:"http://localhost:3000/",
   path: __dirname,
   filename: './public/bundle.js'
 },
  resolve : {
    modules: [__dirname, path.resolve('./app/components'), path.resolve('./app'), path.resolve('./node_modules')],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }

    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
