// Function Exercises
// The following exercises will ask you to create a function that solves a specific problem. 
// (If you use loops, make sure they are part of the function.)
////////////////////////////////////////

// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array 
// containing only the positive numbers in the given array.

////////////////////////////////////////

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing 
// only the even numbers in the given array.

////////////////////////////////////////

// Square the Numbers
// Write a function which takes an array of numbers as its argument and returns a new array 
//containing result of squaring each of the numbers in the given array by two. Example: 
// squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

////////////////////////////////////////

// Cities 1
// Write a function which takes an array of city objects like such:

// const cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// as input and returns a new array containing the cities whose temperature is cooler than
// 70 degrees.

////////////////////////////////////////

// Cities 2
// Write a function which takes an array of city objects like the above problem as input and 
// returns an array of the cities names.

////////////////////////////////////////

// Good Job!
// Given an array of people's names:

// const people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

////////////////////////////////////////

// 3 times
// Given this function:

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.

////////////////////////////////////////

// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as
// a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

////////////////////////////////////////

// Str Multiply
// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply
// Example:

// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. But you can use the range 
// function defined below.

// You may use the following range function as is:

// function range(min, max) {
//   const arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

////////////////////////////////////////

// Bonus: Array sorting
// For these exercises, you'll want to refer to the MDN docs on using Array's sort method.

////////////////////////////////////////

// Sort an array
// Given an array of strings such as the array of names given in one of the "Good Job" problem, 
// sort them by alphabetically order.

////////////////////////////////////////

// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, 
// shortest name first.

////////////////////////////////////////

// Sort an array, 3
// Given an array of array of products:

// const products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];
// Sort the array by price.