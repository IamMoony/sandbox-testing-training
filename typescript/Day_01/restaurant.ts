// //Typescript


// //Create array in 

// var menu : Array<string> = ['burger', 'wrapper', 'toast'];

// for(let i = 0; i < menu.length; i++) {
// 	var newp = document.createElement("p");
// 	var textnode = document.createTextNode(menu[i]);
// 	newp.appendChild(textnode);
// 	document.body.appendChild(newp);

// };

// //Create a const 

// const [itemOne, itemTwo, itemThree]=menu;

// console.log(item[3]);

// //Create a function
// function showthetext(){
//      var randomtext :string = "Hello World!";
// /* in Typescript now you can pick the type of the value for the variable that you create */
//      document.getElementById("result").innerHTML = randomtext;
// }

// //Simple Generic
// // function identity(data: any) {
// //    return data;
// // }

// // console.log(identity("Max"));
// // console.log(identity(27));
// // console.log(identity({name: "Max", age: 27}));

// // Better Generic
// // Function identity<T>(data: T) {
// //    return data;
// // }

// // console.log(identity("Max").length);
// // console.log(identity<number>(27));
// // console.log(identity({name: "Max", age: 27}));

// //Block


// // {
// //    // This is a block
// // }

// //Global Scope
// // {
// //    var a = "block";
// // }
// // console.log(a);

// //Global Function
// // function hello() {
// //    var a = "first text";
// //    for (var i = 0; i < 10; i++) {
// //        var a = "second text";
// //    }
// //    document.write(a);
// // }
// // hello();

// //Let
// function hello() {
//    var a = "function";
//    for (var i = 0; i < 5; i++) {
//        let a = "block";
//    }
//    document.write(a);
// }
// hello();

// //Difference var and let

// //Prints 4 4 4 4 since the y variable is inside the {} it is a global variable and already exists when the loop has counted to 5
// var funcs = [];
// for (var i = 0; i < 5; i += 1) {
//    var y = i;
//    funcs.push(function() {
//        document.write(y);
//    })
// }

// funcs.forEach(function(func) {
//    func()
// });



// //This function outputs us 0 1 2 3 4 since the we declared the y variable with let insead of var!!
// var funcs = [];
// for (var i = 0; i < 5; i += 1) {
//    let y = i;
//    funcs.push(function() {
//        console.log(y);
//    })
// }
// funcs.forEach(function(func) {
//    func()
// });

// //Cons
// t// Const lets us declare variables which don’t change over time, which are fixed.

// const pi = 3.14159;

// //Force Object to throw an error
// "use strict";
// const foo = Object.freeze({"pi": 3.14, "e": 2.71});
// foo.prop = 123; // SyntaxError: Identifier 'foo' has already been declared

// let name = "Mario";
// let multi = `
//    hello
//    world
//    my
//    name
//    is
//    ${name}
// `;
// console.lo(gmulti);

var menu : Array<string>=['burger','wrapper','toast'];

/* here we make an array and the type for the items inside it must be string */

const [itemOne,itemTwo,itemThree] = menu;

/* here we use destructing  and we put the values of the items inside the array to the variables */

for(let i = 0 ; i < menu.length ; i++){
   var newdiv = document.createElement("p");

// create a <p> element


    var textnode = document.createTextNode(menu[i]);
   newdiv.appendChild(textnode);

// Append the text to <p>
   document.body.appendChild(newdiv);

// Append <p> to the body tag
}

function newItem(): void{
   let new_item = (<HTMLInputElement>document.getElementById('new-item')).value;

// Typescript is typesafe. So the document.getElementById() returns the type HTMLElement which does not contain a valueproperty. The subtype HTMLInputElement does however contain the value property.


   var newdiv = document.createElement("p");

// create a <p> element


    var text = document.createTextNode(new_item);

// create a text node 
   newdiv.appendChild(text);

// Append the text to <p>    

document.body.appendChild(newdiv);

// Append <p> to the body tag
}
/* Here we have a function named newItem and the type of the function is void */

function promotion(item: string,price: number): any {
   return "Don't miss our promotion of "+ item + " for just "+ price + " Euro"; 
}
document.getElementById('target').innerHTML=promotion(itemThree,1)