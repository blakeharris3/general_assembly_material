// console.log('JS file is loaded')


// Datatypes

// 1. Number
// 2. Strings
// 3. Booleans

// Strings

// Print Hello World
console.log('Hello World');
console.log("Hello World Double Quotes");

// Stay consistant throughout your 
// applications with either single or double quotes


// Variables
// const vs let vs var
// var - is old way of declaring variables
// We will not use var

// all variables are camelCase
const dharmaBums = 'Jack Kerouac'
// const variables cannot be redifined
// dharmaBums = 'Jack' is NOT allowed


// Changing the interal value of a const
// declaraion
// defining the array
const someArray = [];

someArray.push('taco');

// to test if it works, console.log it
console.log(someArray);


// ALWAYS USE CONST UNTIL THE INTERPRETER
// YELLS AT YOU

// let variables con be redifined
let number = 9;

number = 6;

console.log(number, ' this is the new number')

// Concatenation and Interpolation
// concatenation
console.log('run ' + 'runn ' + 'runnnn' );

// Older way
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!');

// Newer way es6 // similar to ruby
console.log(`What a ${adjective} day!`);


// Practice
console.log('Please ' + 'squeeze ' + 'the ' + 'cheese');
const word = 'believe'
console.log(`Please ${word} the cheese`);

const five = 5
const ten = 10
console.log(`The sum of ${five} and ${ten} is ${five + ten}`);

// Numbers

// Operations

9 + 9 //These will not be logged to the console
9 * 9
9 / 9
9 - 9

// modulus gives us the remainder
// Good for odd and even numbers
9 % 9 // --> 0 


// Comparative Operators

// > // greater than
// < // less than
// == // equal to
// === // strickly equal, also compared types
// >= // greater than or equal
// <= // less than or equal
// != // Not equal


// LOOPS	

// What is a loop?
// A loop is a process that repeats itself

console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);

// Main Principles in Programming
// is to keep your code DRY
// DRY - Don't Repeat Yourself

// initial condition - some variable

// while(//BOOLEAN EXPRESSION) {
	// run code in block
// }

// 						LOOP
// initial condition
// let num = 1;

// while(num <= 1000) {
// 	console.log('The number is: ' + num);
// 	// or num = num + 1
// 	num++;
// }
// 						LOOP
// let num = 1

// while(num <= 100) {
// 	console.log(num);
// 	num++
// }
// 						SQUARING NUMBERS
// let num = 0

// while(num <= 5000) {
// 	console.log(num * num);
// 	num++;
// }

//  					INCREMENT BACKWARDS
// let num = 1000

// while(num >= 1) {
// 	console.log(num);
// 	num--;
// }







// for loops

// more concise loop

// 							count 1 to 1000
// for(let i = 1; i <= 1000; i++) {
// 	console.log(i);
// }


// 							For loop count from 800 to 900
// for (let i = 800; i <= 900; i++) {
// 	console.log(i);
// }








