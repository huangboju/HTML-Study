function People() {

}

People.prototype.say = function () {
  console.log("hello");
}

function Student() {

}

Student.prototype = new People();
var superSay = Student.prototype.say;
Student.prototype.say = function () {
  superSay.call(this);
  console.log("你好");
}

var s = new Student();
s.say()


function Animal() {
  var _this = {};
  _this.sayHello = function () {
    console.log("hello");
  }
  return _this;
}

function Cat() {
  var _this = Animal();
  return _this;
}

var t = new Cat();
t.sayHello();
