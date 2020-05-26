console.log("Hello from Java Script!");

//Variables 
//For older js we used 'var' now use 'let'
//Similar to C++, we can't start variable name with a number, can't contain space or '-'

let name = "Greg";
console.log(name);

//Constants same as C++ just without data type
const pi = 3.14;
console.log(pi);

//Primitives
// String, Number, Boolean, undefined 
let name1 = 'Bob'; // Can use single or double quotes unlike other languages 
let age = 20;
let approved = false;
let selectedColor = null;
let favDog = undefined;
//You can dynamiocally change these value in the consule using 'typeof' keyword

//Reference Types 
//Objects, Array, Function
//Same ideas as other languages including C++
let person = {
    name: 'Joe',
    age: 20
};

//Using dot notation is the same as C++
person.age = 25;

let selection = 'name'
person[selection] = "Kevin";
console.log(person);

//Array (is an object in JS)
let selectedColors = []; //empty array 
selectedColors = ['red', 'blue'];
console.log(selectedColors);
//getting value at certain index in the same as other languages 
console.log(selectedColors[1]);
selectedColors[2] = 'green';
//Unlike other langues we can have different data types in an array 
selectedColors[3] = 5;
console.log(selectedColors.length);

//Functions, really similar to other languages 
function greet(name){
    console.log('Hello how are you '+ name + '?');
}
greet('Chris');

function square(number){
    return number * number;
}
console.log(square(5));