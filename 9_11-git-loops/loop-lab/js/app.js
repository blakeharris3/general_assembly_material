// SyntaxError: missing ) after argument list

console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");
console.log("You wanna be where you can see,");
console.log("our troubles are all the same");
console.log("You wanna be where everybody knows");
console.log("Your name.");



// What is the difference between:

// the assignment operator = used for assigning value // const num = 1

// and the equality comparison operator == takes second value, changes it to the first values type, then compares them
// 5 == '5' changes '5' to just 5. So 5 = 5

// and the strict equality comparison operator === evaluates direct comparison 
// 10 === 10 true
// 10 === "10" false

// ?

// 		While Loops: reps and reps

// 1.
let num = 1;

while(num <= 1000) {
	console.log('Ginger chocolate honey patties');
	num++;
}

// 2.
let number = 0;

while(number <= 1000) {
	console.log(number);
	number++;
}

// 3.
let numbers = 0;

while(numbers <= 1000) {
	console.log('Current loop number is: ' + numbers);
	numbers++;
}




// For loops

// 1.
for (let i = 1; i <= 100; i++) {
	console.log(i);
};

// 2.
for (let i = 7; i <= 635; i++) {
	console.log(i);
};

// 3.
let start = 0;

const limit = 100;

for(let i = start; i <= limit; i++) {
	console.log(i);
}

// 4.

for(let i = 1; i <= 10; i++) {
	if (i === 1) {
		console.log(`You have ran 1 lap!`);
	} else {
		console.log(`You have ran ${i} laps!`);
	}
}


let letters = "Ha";
let i = 0;

while (i < 20) {
	letters += "ha";
	i++;
}

console.log(letters);





