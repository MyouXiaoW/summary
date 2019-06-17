const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: {
    app: path.resolve(appDirectory, 'src/index.js')
  },
  output: {
    filename: '[name].boudle.js',
    path: path.resolve(appDirectory, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({title: 'development'}), new CleanWebpackPlugin()]
};
