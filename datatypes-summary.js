// Primitive Datatypes
// 7 types: [String, Number, Boolean, Number, Null, Undefined, Symbol, BigInt]

//Reference Type (Non-Primitive)
// 3 types: [Arrays, Functions, Objects]
const arraynames = ["muhammad", "mudassir", "lexus"];

let obj = {
    name:"muhammad",
    age:22
}

const myFunction = function(){
    console.log("Function successfully made!");
}

console.log(typeof obj);
console.log(typeof myFunction);
console.log(typeof arraynames);

// Stack (Primitive Datatypes), Heap (Non-Primitive Datatypes)
//He teaches call my reference and call by value stuff