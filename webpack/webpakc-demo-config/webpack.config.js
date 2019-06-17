const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: path.resolve(appDirectory, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(appDirectory, 'dist')
  }
};
