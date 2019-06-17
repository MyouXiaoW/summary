let obj = {a: 1};

console.log('a' in obj);

console.log(Reflect.has(obj, 'a'));

let p = new Proxy(obj, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});

p.a = 1;

// var loggedObj = new Proxy(obj, {
//   get(target, name) {
//     console.log('get', target, name);
//     return Reflect.get(target, name);
//   },
//   deleteProperty(target, name) {
//     console.log('delete' + name);
//     return Reflect.deleteProperty(target, name);
//   },
//   has(target, name) {
//     console.log('has' + name);
//     return Reflect.has(target, name);
//   }
// });

let a = Function.prototype.apply.call(
  function(...rest) {
    console.log(this);
    return [this, rest];
  },
  11,
  [1, 2, 3, 4]
);

console.log(a);
function ccc(a) {
  console.log(a);
}

ccc.apply({}, [1, 2, 3, 4]);
// let b = Reflect.apply(
//   function(a) {
//     console.log(this);
//     return a;
//   },
//   [1, 2, 3, 4],
//   []
// );
// console.log(b);
