// PART 1: TERMS

// 1. What is the difference between interpolation and concatenation? Give an example of each.
// Concatenation allows you to add stings together using the + symbol after exiting another sting. es5 version
// Interpolation lets you stay inside your current string and uses ${variable} to add the string within without have to exit the 
// string and add each variable with the + symbol

// let name = 'Dave'

// Concatenation // console.log('Hello, ' + name + '. How are you?')
// Interpolation // console.log(`Hello, ${name}. How are you?`)



// 2. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
	// Don't Repeat Yourself. It makes the code cleaner, nicer, and much easier for you or someone else to read. Loops are a good example 
	// of DRY code by 1 line of code running several times versus typing each code out individually

// 3. What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
	// Declaring a variable is giving the variable a name. Assigning the variable is coping a value to the declared variable.
	// Defining a variable is giving that varable a value that can be called upon later in the code.


// 4. When should we use const and when should we use let?
	// const is used when that variable is NOT going to get redefined.
	// let is used when the variable can get redifined. Such as for loops when 'let i = ' can go from 1 to 1000


// 5. Unix question: What is a "parent" directory?
	// A parent directory is a directory with other directories or files within it. Its the 'top of the tree'.
	
// 6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
	// man (command)

// 7. More Unix: What is "tab completion" and why is it aweseome?
	// It guesses or autofills the directory or file you are looking for and it can speed up your code very much.




// PART 2: BOOLEAN EXPRESSIONS AND OPERATORS

a != b;
c != d;
'Name' === 'Name';
a != b != c;
a == a != d;
e > 'Kevin';



// PART 3: WHILE LOOPS

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters); // --> AAAAAAAAAAAAAAAAAAA


// PART 4: LOOPS!

// 1. Both for loops and while loops repeat code. But what are the differences? What are the similarities?
	// They are different by while loops require a starting value prior to the loop, as a for loop the starting and ending values are withing the loop.
	// They both have a starting and ending point with the loops and they can both log values within the loop.



// 2. Write a for loop that will console.log() the numbers 0 to 999.

	for(let = 0; i <= 999; i++) {
		console.log(i);
	}

// 3. 
	// Where the loop starts
	// Where the loop ends
	// How the loop increments


// 4.

	for (let i = 999; i >= 0; i--) {
		console.log(i);
	}

// 5.

	for (let i = 1; i <= 10; i++) {
		console.log(`The value of i is: ${i} of 10`);
	} 

