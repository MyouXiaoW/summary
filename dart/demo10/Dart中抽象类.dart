/*
Dart 中抽象类：Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。


1、抽象类通过abstract 关键字来定义

2、Dart中的抽象方法不能用abstract声明，Dart中没有方法体的方法我们成为抽象方法

3、如果子类继承抽象类必须得实现里面的抽象方法


 */
// 案例定义一个animal 要求他的子类都必须包含eat方法

abstract class Animal {
  eat(); //抽象方法
  printinfo() {
    print('我是一个抽象类');
  }
}

class Dog extends Animal {
  @override
  eat() {
    print('小狗吃');
  }
}

main() {
  Dog d = new Dog();
  d.eat();

  // Animal a = new Aimal(); 抽象类是无法实例化的 主要是定义标准
}
