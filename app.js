var j = 10;
var i = 10;
var m = i + j;
console.info("hellow world");

if (true) {
  var x = 5;
}
console.log(x); // 5 


var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
