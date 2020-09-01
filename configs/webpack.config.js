const { join } = require("path");

const isDev = process.env.NODE_ENV === "development";

const rootDir = join(__dirname, "..");
const staticDir = join(rootDir, ".");

module.exports = {
  entry: "./index.jsx",
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1, modules: true, sourceMap: isDev },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|otf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
  output: {
    filename: "index.js",
    path: join(staticDir, "static"),
    publicPath: "",
  },
};
