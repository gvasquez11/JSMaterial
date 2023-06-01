
//-------------------Add/Remove items in array----------------------//

// shift and unshift for beginning 
// push and pop for end 


let myArr = [1,2,3,4,5,6,7,8,9,10]

myArr.shift(0) // removes front elemnt

console.log(myArr)

myArr.unshift(1) //adds back the number 1 to the beginning 

console.log(myArr)

myArr.pop() // removes the last number 

console.log(myArr)

myArr.push(10) //puts 10 back to the back 

console.log(myArr)

// can use 'delete' in order to remove value but doesn't remove memory space
delete myArr[1]

console.log(myArr) // Will show 'empty' like so 
                //[1, empty, 3, 4, 5, 6, 7, 8, 9, 1-]10]



//-------------------Splice Method----------------------//
//What can be used to help get rid of that 'space' is 'splice'
//Syntax: arr.splice(positionStart,howmanyToDelete, elem1toAdd, elem2toAdd, etc..)

let arr = ["I", "study", "JavaScript"];

arr.splice(1,1) //Starting from position 1 we delete 1 item 

console.log(arr); // ['I', 'JavaScript']

let arrTwo = ["Hello", "how", "are", "you", "today?"];
arrTwo.splice(0,1) //starting from position 0 delete 1 element. 
console.log(arrTwo) // ['how', 'are', 'you', 'today?']

let spliceArr = ['red', 'blue','orange', 'gold', 'green']
console.log(spliceArr) // ['red', 'blue', 'orange', 'gold', 'green']
spliceArr.splice(1,0,'yellow', 'black', 'purple')
console.log(spliceArr) // ['red', 'yellow', 'black', 'purple', 'blue', 'orange', 'gold', 'green']



//-------------------Slice Method----------------------//
// Syntax: arr.slice([start], [end]) excludes 'end' 

let arrEx = ["t", "e", "s", "t"];

console.log( arrEx.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arrEx.slice(-2) ); // s,t (copy from -2 till the end) 
//note: that negative count is starting from 1 NOT 0  


//-------------------Iterate through array----------------------//

//-------------------forEach----------------------//
// Syntax arr.forEach(function (item, index, array))
// also  arr.forEach( (item, index, array) => {  })

let loopArr = ["Bilbo", "Gandalf", "Nazgul"]

//If parameter is one, it defaults to 'item' 
loopArr.forEach(val => {
    console.log(val)
})

//Must have parentheses if we want to use more than just 'item'
loopArr.forEach((item, index)=> {
    console.log(item + ' is at position ' + index)
})


//-------------------Search Methods----------------------//


//-------------------indexOf/lastIndexOf----------------------//
let fruits = ['Apple', 'Orange', 'Apple']

console.log(fruits.indexOf(0)) // will result in -1 since 0 in not part of array 

console.log(fruits.indexOf('orange')) // all -1 CASE SENSITIVE

console.log(fruits.indexOf('Apple')) // 0 goes from left to right 

console.log(fruits.lastIndexOf('Apple')) // 2 goes from right to left 

//-------------------includes method----------------------//

const nums = [1,3,8,NaN]

console.log(nums.includes(3)) // true
console.log(nums.includes(NaN)) // true

//-------------------find method----------------------//
// Syntax: arr.find(function(item, index, array){})

let randArr = [1, 'word', 3.14, 'hi']
console.log(randArr.find(item => item === 3.14)) // returns 3.14

//Very useful when dealing with Array Objects

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

console.log(users.find(item => item.id == 2)) 
// Return the Object of Pete
//{id: 2, name: 'Pete'}
 let user = users.find(item => item.id == 2)
 console.log(user.name) // Prints out Pete

 //-------------------findIndex method----------------------//
console.log(users.findIndex(item => item.name === "Mary")) // Returns 2
console.log(users.findLastIndex(item => item.name === "John")) // Returns 3


 //-------------------filter method----------------------//
// Syntax: arr.filter(function(item,index,array))

let listOfNums = [1,4,7,12,20,25]
let evens = listOfNums.filter(num => num % 2 === 0) // filters out all even numbers
console.log(evens) // 4, 12, 20

 //-------------------Transform methods----------------------//

  //-------------------map method----------------------//
  //Syntax: arr.map(function(item, index, array)

  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
  console.log(lengths) // [5, 7, 6]

  let powers = [2,2,2,2,2,2,2,2,2,2].map((item,index )=> Math.pow(item,index)) 
  console.log(powers)

  


