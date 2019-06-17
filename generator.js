// function* helloworld() {
//   yield 'hello';
//   console.log(111);
//   yield 'world';
//   console.log(222);
//   return 'ending';
// }

// const hw = helloworld();

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next(1));

function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) {
      i = -1;
    }
  }
}

var g = f();

g.next(); // { value: 0, done: false }
g.next(); // { value: 1, done: false }
g.next(true); // { value: 0, done: false }

// 由于next方法的参数表示上一个yield表达式的返回值，
// 所以在第一次使用next方法时，传递参数是无效的。
// V8 引擎直接忽略第一次使用next方法时的参数，
// 只有从第二次使用next方法开始，参数才是有效的。
// 从语义上讲，第一个next方法用来启动遍历器对象，
// 所以不用带有参数。
function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
genObj.next();
// Started
genObj.next('a');
// 1. a
genObj.next('b');
// 2. b

function wrapper(generatorFunction) {
  return function(...args) {
    let generatorObject = generatorFunction(...args);
    let a = generatorObject.next();
    // console.log(a);
    return generatorObject;
  };
}

const wrapped = wrapper(function*() {
  //   yield 1;
  console.log(`First input: ${yield}`);
  console.log(`First input: ${yield}`);
  return 'DONE';
});

wrapped().next('hello!');

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
}

for (let v of foo()) {
  console.log(v);
}

function* objectentries(obj) {
  let propkeys = Reflect.ownKeys(obj);
  for (let propkey of propkeys) {
    yield [propkey, obj[propkey]];
  }
}

let jane = {first: 'Jane', last: 'Doe'};

for (let [key, value] of objectentries(jane)) {
  console.log(key, value);
}

//
function* entries() {
  let propkeys = Object.keys(this);
  for (let propkey of propkeys) {
    yield [propkey, this[propkey]];
  }
}

jane[Symbol.iterator] = entries;

for (let v of jane) {
  console.log('Symbol.iterator', v);
}

// 除了for...of循环以外，扩展运算符（...）、
// 解构赋值和Array.from方法内部调用的，
// 都是遍历器接口。这意味着，它们都可以将
// Generator 函数返回的 Iterator 对象，作为参数。

function* number() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 0;
  yield 6;
}

console.log(...number());

let [x, y] = number();
console.log(x, y);

console.log(Array.from(number()));

for (let v of number()) {
  console.log(v);
}

//以下几种方法是需要掌握的使用方法
Generator.prototype.next();
Generator.prototype.throw();
Generator.prototype.return();
yield * [];

// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}

result;
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// 任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。下面是一个简单的 Thunk 函数转换器。
