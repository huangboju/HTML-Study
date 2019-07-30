var Sales = "Toyota";

function CarTypes(name) {
  return (name === "Honda") ?
    name :
    "Sorry, we don't sell " + name + ".";
}

var car = {
  myCar: "Saturn",
  getCar: CarTypes("Honda"),
  special: Sales
};

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
