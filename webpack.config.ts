/* eslint-disable @typescript-eslint/explicit-function-return-type */

import autoprefixer from "autoprefixer";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import * as path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  Configuration
} from "webpack";
import merge from "webpack-merge";

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = "development";
}

const isEnvProduction = process.env.NODE_ENV === "production";

const development: Configuration = {
  devtool: "cheap-module-source-map",
  mode: "development",
  plugins: [new HotModuleReplacementPlugin()]
};

const production: Configuration = {
  bail: true,
  devtool: undefined,
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          // eslint-disable-next-line @typescript-eslint/camelcase
          keep_classnames: false,
          // eslint-disable-next-line @typescript-eslint/camelcase
          keep_fnames: false,
          output: {
            ecma: 5,
            // `For license information please see ...` というライセンスに関連したコメントだけは残すようにする
            comments: /^(.+)[^@]license/i,
            // eslint-disable-next-line @typescript-eslint/camelcase
            ascii_only: true
          }
        }
      })
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[hash].css"
    }),
    new (require("license-webpack-plugin").LicenseWebpackPlugin)({
      addBanner: true,
      // package.json の devDependencies に含まれるパッケージは除外する
      excludedPackageTest: (name: string) =>
        Object.keys(require("./package.json").devDependencies).includes(name),
      outputFilename: "bundle.[hash].js.LICENSE",
      renderBanner: (filename: string) =>
        `/* For license information please see ${filename} */`
    })
  ]
};

export default merge(
  {
    entry: path.resolve(__dirname, "src/index.tsx"),
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          test: /\.scss$/,
          loader: [
            process.env.NODE_ENV === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: process.env.NODE_ENV !== "production",
                url: false
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: [autoprefixer],
                sourceMap: process.env.NODE_ENV !== "production"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: process.env.NODE_ENV !== "production"
              }
            }
          ]
        },
        {
          test: [/\.jpe?g$/, /\.png$/],
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]"
          }
        },
        {
          test: /\.svg$/,
          use: [
            "@svgr/webpack",
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]"
              }
            }
          ]
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      pathinfo: !isEnvProduction,
      filename: isEnvProduction ? "bundle.[hash].js" : "bundle.js",
      futureEmitAssets: true,
      devtoolModuleFilenameTemplate: isEnvProduction
        ? undefined
        : info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: "public/",
          from: { glob: "**/*" },
          ignore: ["index.html"]
        }
      ]),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, "public/index.html")
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  keepClosingSlash: true
                }
              }
            : undefined
        )
      ),
      new DefinePlugin({
        "process.env": JSON.stringify({
          NODE_ENV: process.env.NODE_ENV || "development"
        })
      })
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src")
      },
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
      modules: ["node_modules"]
    }
  },
  isEnvProduction ? production : development
);

/* eslint-enable @typescript-eslint/explicit-function-return-type */
