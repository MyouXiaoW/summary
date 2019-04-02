//节流

function throttle(fn, wait) {
  let pre = new Date();
  return function() {
    let now = new Date();
    if (now - pre > wait) {
      fn.apply(this, arguments);
      pre = new Date();
    }
  };
}
