const path = require('path');
const fs = require('fs');

const htmlwebpackplugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: {
    app: path.resolve(appDirectory, 'src/index.js'),
    print: path.resolve(appDirectory, 'src/print.js')
  },

  output: {
    filename: '[name].boundle.js',
    path: path.resolve(appDirectory, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin(),

    new htmlwebpackplugin({
      title: 'output manager'
    })
  ]
};
