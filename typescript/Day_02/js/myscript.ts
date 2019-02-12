//Inherited Objects

//Looping over objects with a for-in loop also iterated over the inherited properties as well as the objects own properties.

// //Inherited object (vererbt). We loop through the object properties (let prop in obj (= let obj)) 
// and if we log "prop" we get a,b,c,d as a output since the obj inhiterates the object properties from base aswell (a,b)

// let base = { a: 1, b: 2 };
// let obj = Object.create(base);
// obj['c'] = 3;
// obj['d'] = 12;
// for (let prop in obj) console.log(prop)

//This example only outputs c and d since we add the if statement (obj.hasOwnProperty(prop)) --> 
// only outputs the objects own properties. 
// So we can ensure we are only looking in the objects own properties not the inherited one.
// let base = { a: 1, b: 2 };
// let obj = Object.create(base);
// obj['c'] = 3;
// obj['d'] = 12;
// for (let value in obj) {
//    if (obj.hasOwnValue(value)) {
//        console.log(value)
//    }
// }


// "use strict";
// let obj = {hasOwnProperty: 1};
// obj.hasOwnProperty("test");

//Map - lets you map keys to values without the drawbacks of using Objects.

// let map = new Map();
// map.set("A",1);
// map.set("B",2);
// map.set("C",3);


// let map = new Map([
// [ "APPLE", 1 ],
// [ "ORANGE", 2 ],
// [ "MANGO", 3 ]
// ]);


// for (let entry of map.entries()) {
// console.log(entry[0], entry[1]);
// }

//Distinction between Object and Map is that  
// Maps record the order in wich elements are inserted. It then replays that order 
// when looping  over keys and or entries(=key:value)
//for looping over an map use: for-of loop


// The Set method only stores keys and not   value key pairs

//Sets store unique values (can only be added once)
//for looping over an set use: for-of loop
//Similar to maps sets also record the order in wich elements are inserted.
//We use set if wen want to save just keys not key-value pairs



// Questions:
// how does the entry methode work index 0,1 outputs all 3???


