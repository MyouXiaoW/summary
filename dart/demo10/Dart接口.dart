// 定义一个Db库支持 mysql mssql mongodb

abstract class Db {
  //当作接口  接口就是规范
  String uri; //数据库的链接地址
  add(String data);
  save();
  delete();
}

class Mysql implements Db {
  @override
  String uri;

  Mysql(this.uri);

  @override
  add(String data) {
    print('这是mysql的add方法${this.uri}');
  }

  @override
  delete() {
    // TODO: implement delete
    return null;
  }

  @override
  save() {
    // TODO: implement save
    return null;
  }
}

main() {
  Mysql mysql = new Mysql('xxxx');

  mysql.add('asdsd');
}
