let obj = {};
let handler = {
  set(target, prop, value) {
    console.log(target);
    console.log(prop);
    console.log(value);
    return (target[prop] = value);
  },
  get(target, prop) {
    console.log(target);
    console.log(prop);
    return 'this is get';
  }
};

let p = new Proxy(obj, handler);

// obj.a = 1;

p.a = 1;
p.a;
