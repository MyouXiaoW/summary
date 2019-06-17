const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: path.resolve(appDirectory, 'src/index.js'),

  output: {
    filename: 'main.js',
    path: path.resolve(appDirectory, 'dist')
  },

  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|gif|jpg|svg)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      {test: /\.(csv|tsv)$/, use: ['cvs-loader']},
      {test: /\.xml/, use: ['xml-loader']}
    ]
  }
};
