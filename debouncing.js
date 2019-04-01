// 函数调用后不会被立即执行 之后连续 wait 时间段没有调用才会执行

function debouncing(fn, wait) {
  let timmer = null;

  return function() {
    if (timmer) clearInterval(timmer);
    timmer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

debouncing(a, 10000)();
