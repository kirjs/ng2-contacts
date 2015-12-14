module.exports = {
  entry: "./src/components/app/app.js",
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
