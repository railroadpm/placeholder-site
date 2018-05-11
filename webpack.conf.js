import webpack from "webpack";
import path from "path";

const webpackConfig = {
  module: {
    loaders: [{
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ],

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    cms: ["./js/cms"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals: [/^vendor\/.+\.js$/]
};

const isDevelopmentEnv = true;

if (!!process.env.UGLIFY) {
  const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

  webpackConfig.plugins.push(new UglifyJSPlugin({
    uglifyOptions: {
      ecma: 8,
      warnings: false,
      output: {
        comments: false,
        beautify: false
      },
      compress: {
        drop_console: true
      },
      toplevel: false,
      nameCache: null,
      ie8: false,
      keep_classnames: undefined,
      keep_fnames: false,
      safari10: false,
    }
  }));

  console.log('Uglifyjs added to webpack config');
}

export default webpackConfig;
