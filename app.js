// CHAPTER 3

// OBJECT LITERALS

var empty_object = {};

// so quotes are required around "first-name", but are optional around first_name
var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard",
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney",
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23",
    city: "Los Angeles",
  },
};

// RETRIEVAL
stooge["first-name"]; // "Jerome"
flight.departure.IATA; //"SYD"

// the || operator can be used to fill in default values
var middle = stooge["middle-name"] || "(none)"; //(none)
var status = flight.status || "unknown"; //unknown

// UPDATE
stooge["first-name"] = "Joe";
stooge["middle-name"] = "Lester";
stooge.nickname = "Curly";
flight.equipment = {
  model: "Boeing 777",
};
flight.status = "overdue";

// REFERENCE
var x = stooge;
x.nickname = "Curly";
nick = stooge.nickname;

// PROTOTYPE
if (typeof Object.create !== "function") {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}
var another_stooge = Object.create(stooge);
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";

stooge.profession = "actor";
another_stooge.profession;

// REFLECTION
typeof flight.number; //number
typeof flight.status; //string
typeof flight.arrival; //Object
typeof flight.manifest; //undefined

// ENUMERATION

// var name;
// for (name in another_stooge) {
//   if (typeof another_stooge[name] !== "function") {
//     document.writeln(name + ":" + another_stooge[name]);
//   }
// }

var i;
var properties = ["first-name", "middle-name", "last-name", "profession"];
for (i = 0; i < properties.length; i += 1) {
  //i=i+1
  console.log(properties[i] + ":" + another_stooge[properties[i]]);
}

// DELETE
// console.log(another_stooge.nickname);
delete another_stooge.nickname;

console.log(another_stooge.nickname);

// GLOBAL ABATEMENT
var MYAPP = {};

MYAPP.stooge = {
  "first-name": "Joe",
  "last-name": "Howard",
};

MYAPP.flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney",
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23",
    city: "Los Angeles",
  },
};

console.log(MYAPP.stooge);
console.log(stooge);

// CHAPTER 4 - FUNCTIONS

// FUNCTION LITERAL
var add = function (a, b) {
  return a + b;
};

// THERE AREA FOUR PATTERNS OF INVOCATION IN JS: THE METHOD INVOCATION PATTERN, THE FUCNTION INVOCATION PATTERN, THE CONSTRUCTOR INVOCATION PATTERN, AND THE APPLY INVOCATION PATTERN.

// THE METHOD INVOCATION PATTERN
var myObject = {
  value: 0,
  increment: function (inc) {
    return (this.value += typeof inc === "number" ? inc : 1);
  },
  getValue: function () {
    return this.value;
  },
};

myObject.increment();
console.log(myObject.value); //1
myObject.increment(2);
console.log(myObject.value); //3

// THE FUNCTION INVOCATION PATTERN
var sum = add(3, 4); //7

myObject.double = function () {
  var that = this;
  var helper = function () {
    that.value = add(that.value, that.value);
  };
  helper();
};

myObject.double();
console.log(myObject.getValue());

// THE CONSTRCUTOR INVOCATION PATTERN
var Quo = function (string) {
  this.status = string;
};

Quo.prototype.get_status = function () {
  return this.status;
};

var myQuo = new Quo("confused");
console.log(myQuo.get_status()); //confused

// THE APPLY INVOCATION PATTERN
var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
  status: "A-OK",
};
