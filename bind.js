//1.调用函数的bind之后会返回一个改变this的新函数
//2.参数要传递到新的函数中
//3.实例化的时候要把bind返回的函数原型链挂到原函数上
//4.一个函数被bind两次是没有意义的

//bind最重要的点在于返回的resfn ，resfn要有两种调用方式，第一个是被直接调用，第二个是被new
//第一种是把this绑定到函数上
//第二种要在函数里面做一下this是否是resfn自己构造的

//手写的bind就是在实例化后继承原来的实例化函数
//原生的bind就是把this绑到实例化后的目标函数上

function _bind(_this) {
  if (typeof this !== 'function') {
    throw Error('is not function');
  }

  const fn = this;
  let args = [...arguments].slice(1);

  let resFn = function() {
    return fn.apply(this instanceof resFn ? this : _this, args.concat(...arguments));
  };

  resFn.prototype = Object.create(fn.prototype);
  resFn.prototype.constructor = this;

  return resFn;
}
