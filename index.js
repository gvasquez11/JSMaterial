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

//String methods 
// indexOf() - returns the index of the firs occurrence of a specified text string:

let sentence = "Hello, how are you doing today? Today is sunny!";
let pos = sentence.indexOf("Today"); //Yes it is case sensitive
console.log("This is the position of " + pos)

//lastIndexOf() - return the index of the last occurrence of a specified text in a string:
//Both of these string methods return -1 if word is not found 
//Both can also have a starting position as a second parameter

let str = "Please locate where 'locate' occurs!";
let pos1 = str.lastIndexOf("locate");
let pos2 = str.lastIndexOf("locate", 7);
console.log(pos1)
console.log(pos2)

//search() - searches a string for a specified value and resturn the position of the match: 
var str1 = "Please locate where 'locate' occurs!";
var pos3 = str1.search("locate");
console.log(pos3)

/*
slice(start, end) can accept negative values
substring(start, end) cannot accept negative values 
substr(start, length) can accept negative values 
*/
var words = "Apple, Banana, Kiwi";
var res = words.slice(7, 13);
var res1 = words.slice(-12, -6); // Can slice from the back
console.log(res)
console.log(res1)


/*
replace()- replaces only the first match by default and is case sensitive
to work around this use regex(regular expressions)
/i - insensitive
/g - global(aka all matches of the word)
*/

let str10 = "Please visit Microsoft and Microsoft!";
var n = str10.replace(/Microsoft/g, "twitch");
console.log(n)


var x = 0.2 + 0.1; 
console.log(x)

// == is same value
// === is same value AND type 
//comapring two objects always result in false, we cannt compare object in javascript 