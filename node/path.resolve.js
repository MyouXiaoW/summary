const path = require('path');
const fs = require('fs');

console.log('cwd', process.cwd());

const appDirectory = fs.realpathSync(process.cwd());
console.log('appDirectory', appDirectory);
console.log('cwd', process.cwd());
let path_A = path.resolve('');
let path_B = path.resolve('..');
let path_C = path.resolve('.', '../../');
let path_D = path.resolve('.', '/Users/xia');
let path_E = path.resolve('/Users', '../xiaowang');
let path_F = path.resolve(appDirectory, '.');
console.log('Path_A', path_A);
console.log('Path_B', path_B);
console.log('Path_C', path_C);
console.log('Path_D', path_D);
console.log('Path_E', path_E);

console.log('__filename', __filename);
console.log('__dirname', __dirname);
// console.log('process', process);
console.log('path_F', path_F);

// console.log('process.argv', process['argv']);
// console.log('process.env', process.env);
