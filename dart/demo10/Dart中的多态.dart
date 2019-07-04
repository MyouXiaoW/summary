/*

      Dart中的多态：
      允许降子类类型的指针赋值给父类型的指针，同一个函数调用会有不同的执行结果

      子类的实例赋值给父类的引用

      多态就是父类定义一个方法不去是想，让继承他的子类去实现，每个子类有不同的表现
*/

abstract class Animal {
  eat(); //抽象方法
  run();
  printinfo() {
    print('我是一个抽象类');
  }
}

class Cat extends Animal {
  @override
  run() {
    print('小猫在跑');
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
