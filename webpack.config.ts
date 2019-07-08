import autoprefixer from "autoprefixer";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import * as path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import {
  Configuration,
  HotModuleReplacementPlugin,
  DefinePlugin
} from "webpack";
import merge from "webpack-merge";
import WorkboxWebpackPlugin from "workbox-webpack-plugin";
import WriteFileWebpackPlugin from "write-file-webpack-plugin";

const { NODE_ENV } = process.env;

const common: Configuration = {
  entry: path.resolve(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loader: [
          NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [autoprefixer]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {
            debug: NODE_ENV !== "production",
            optimize: NODE_ENV === "production",
            verbose: true
          }
        }
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: NODE_ENV === "production" ? "[contenthash].js" : "index.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets"),
        to: path.resolve(__dirname, "build/assets")
      },
      {
        from: path.resolve(__dirname, "src/CNAME"),
        to: path.resolve(__dirname, "build")
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      minify: {
        collapseWhitespace: NODE_ENV === "production"
      }
    }),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV || "development")
      }
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};

const development: Configuration = merge(common, {
  devtool: "cheap-module-source-map",
  mode: "development",
  plugins: [new HotModuleReplacementPlugin(), new WriteFileWebpackPlugin()]
});

const production: Configuration = merge(common, {
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          mangle: true,
          compress: {
            passes: 2,
            unsafe: true,
            unsafe_comps: true, // eslint-disable-line @typescript-eslint/camelcase
            keep_fargs: false, // eslint-disable-line @typescript-eslint/camelcase
            pure_getters: true, // eslint-disable-line @typescript-eslint/camelcase
            // eslint-disable-next-line @typescript-eslint/camelcase
            pure_funcs: [
              "F2",
              "F3",
              "F4",
              "F5",
              "F6",
              "F7",
              "F8",
              "F9",
              "A2",
              "A3",
              "A4",
              "A5",
              "A6",
              "A7",
              "A8",
              "A9"
            ]
          }
        }
      })
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          annotation: true,
          inline: false
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css"
    }),
    // https://github.com/facebook/create-react-app/blob/caf0a30e38d0cb9bbd2aab733efa0dd1aa6a9cb6/packages/react-scripts/config/webpack.config.js#L609-L621
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /CNAME$/],
      importWorkboxFrom: "cdn",
      navigateFallback: "/index.html",
      navigateFallbackBlacklist: [
        new RegExp("^/_"),
        new RegExp("/[^/]+\\.[^/]+$")
      ]
    })
  ]
});

export default NODE_ENV === "production" ? production : development;
