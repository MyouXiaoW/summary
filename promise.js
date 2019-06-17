//要想实现promise先要明确我们想要实现的功能
//1.三种状态 pending resolve reject
//2.处于pending状态的时候可以转为resolve或者是reject状态
//3.处于resolve状态或这是reject状态的时候是不可逆的

class Promise {
  state = {
    pending: true,
    resolve: false,
    reject: false
  };
  constructor(excutor) {
    
  }
  resolve = () => {};
  reject = () => {};
}

new Promies((resolve, reject) => {});
