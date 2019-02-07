var webpack = require('webpack');
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const output = {
  development: {
    path: path.resolve(__dirname, './routes/redux-render'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  },
  production: {
    path: path.resolve(__dirname, './public/js/dist'),
    filename: '[name].js',
    libraryTarget: "commonjs2"
  }
}
const devtool = {
  development: '',
  production:  ''
}
const entry = {
  development: {
    'render': './routes/redux-render/src/render.jsx',
  },
  production: {
    home: './public/js/src/home.js',
  }
}
const plugins = {
  development: [],
  production: []
}

const env_key = process.env.NODE_ENV === 'development' ? 'development' : 'production'

module.exports = {
  context: __dirname,
  target: 'node',
  entry:   entry[env_key],
  output:  output[env_key],
  devtool: devtool[env_key],
  plugins: plugins[env_key],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015'],
          plugins: ["babel-plugin-transform-class-properties"]
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
      // 
    }],
    rules: [
      {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
          // 'style-loader!css-loader?modules!sass-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ]
  },
  resolve: {
    alias:{
      styles_path: path.resolve(__dirname, 'public','styles','src'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
    modules: [
      path.resolve(__dirname, 'public/js/src'),
        'node_modules'
    ]
  },
};


// const path = require('path');
// const webpack = require('webpack');
//
// require('dotenv').config();
//
// module.exports = {
//   entry: [
//     'react-hot-loader/patch',
//     // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
//     './public/js/src/app.js'
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, '/public/js/dist'),
//     publicPath: '/'
//   },
//   devServer: {
//     hot: true,
//     contentBase: './public',
//     inline: true,
//     publicPath: 'http://localhost:8080/',
//     port: 8080
//   },
//   devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'false',
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery',
//       Popper: ['popper.js', 'default'],
//       // In case you imported plugins individually, you must also require them here:
//       Util: "exports-loader?Util!bootstrap/js/dist/util",
//       Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
//     }),
//     // new CleanWebpackPlugin(['dist']),
//     // new HtmlWebpackPlugin({
//     //   title: 'Hot Module Replacement'
//     // }),
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(html|css|txt)$/,
//         use: 'raw-loader'
//       },
//       {
//         test: /\.scss$/,
//         use: [{
//           loader: "style-loader" // creates style nodes from JS strings
//         }, {
//           loader: "css-loader" // translates CSS into CommonJS
//         }, {
//           loader: "sass-loader" // compiles Sass to CSS
//         }]
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: {
// 					presets: [
// 						'es2015',
//             'react',
//             'stage-2'
// 					]
// 				},
//       }
//     ]
//   }
// };
