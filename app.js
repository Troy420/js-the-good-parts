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
for (i = 0; i < properties.length; i++) {
  document.writeln(properties[i] + ":" + another_stooge[properties[i]]);
}
