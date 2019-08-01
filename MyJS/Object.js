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
