// alert("your JS file is connected!!");

// /*Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function
// */

// function myFirst() {
//     console.log("Hello");
//   }
//   myFirst();



// /*Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function
// */

// function mySecond(name) {
//     console.log(name);
//   }
//   mySecond("Miheret");



// /*Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console
// */

// function myThird(name) {
//     mySecond(name);
//   }
//   myThird("Miheret");



// /*Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console
// */

// function myFourth(numbers) {
//     if (numbers.length > 0) {
//       console.log(numbers[0]);
//     } else {
//       console.log("Array is empty");
//     }
//   }
//   myFourth([1, 2, 3]);



// /*Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console
// */


// function myFifth(numbers) {
//   if (!Array.isArray(numbers) || numbers.length !== 2 || typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') {
//       console.log("Invalid input.");
//   } else {
//       const sum = numbers[0] + numbers[1];
//       console.log("Sum:", sum);
//   }
// }

// myFifth([2, 3]);
// myFifth(["two", 3]);
// myFifth(2, 3);


  /*Question 6
● Write a function that takes an integer minutes and converts it to seconds.
*/

// function timeConvert(minutes) {
//   if (typeof minutes !== 'number' || minutes < 0) {
//       return "Invalid input.";
//   }
//   return minutes * 60;
// }
// console.log(timeConvert(2));
// console.log(timeConvert(-2));



// /*
// Question 7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.
// */

// function numberPlus(number) {
//   if (typeof number !== 'number') {
//       return "Invalid input.";
//   }
//   return number + 1;
// }
// let answer = numberPlus(2);
// console.log(answer);



// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.

// function AreaOfTriangle(base, height) {
//   if (typeof base !== 'number' || typeof height !== 'number' || base < 0 || height < 0) {
//     return "Invalid input.";
//   }
//   return (base * height) / 2;
// }

// console.log(AreaOfTriangle(3, 4));



// Question 9
// ● Create a function that returns the total number of legs of all the animals.

// function totalLeg(chickens, cows, pigs) {
//   if (
//     typeof chickens !== 'number' || typeof cows !== 'number' || typeof pigs !== 'number' ||
//     chickens < 0 || cows < 0 || pigs < 0
//   ) {
//     return "Invalid input. Number of animals must be positive numbers.";
//   }

//   const legChicken = chickens * 2;
//   const legCow = cows * 4;
//   const legPig = pigs * 4;

//   return legChicken + legCow + legPig;
// }

// console.log(totalLeg(1, 2, 3));


//   /*
// Question 10 
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array
// */

// function triple(numbers) {
//   if (!Array.isArray(numbers) || numbers.length !== 2 || typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') {
//       return "Invalid input.";
//   }
//   return numbers[0] * 3;
// }
// console.log(triple([1, 2]));



//   //Questions on Conditional statements and - practice exercise
// /*
//   Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
// */

// function equal(num1, num2) {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//       return "Invalid input.";
//   }
//   return num1 === num2;
// }
// console.log(equal(2, 2));



//   /*
// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
// */

// function divisibility100(num) {
//   if (typeof num !== 'number') {
//       return "Invalid input.";
//   }
//   return num % 100 === 0;
// }
// console.log(divisibility100(200));



// /*
// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
// */

// function parity(number) {
//   if (typeof number !== 'number') {
//       return "Invalid input.";
//   }
//   return number % 2 === 0 ? "even" : "odd";
// }
// console.log(parity(3));
//   /*



// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79
// */

// function gradeCalc(mark) {
//   if (typeof mark !== 'number') || mark > 100 || mark < 0) {
//       return "Invalid score";
//   } else if (mark >= 90 && mark <= 100) {
//       return "Grade A";
//   } else if (mark >= 80 && mark <= 89) {
//       return "Grade B";
//   } else {
//       return "Grade C";
//   }
// }
// console.log(gradeCalc(200));

                  /* HOME WORK */
/*
1- what is hoisting concept in function
2- what is callback function , higher order function */

/*
1. Hoisting in Functions:
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in your code.
In the case of functions, both function declarations and function expressions are hoisted. However, there is a difference in how they are hoisted.
Function Declaration Hoisting:
Eg.
greet(); 
function greet() {
    console.log("Hello!");
}
Function Expression Hoisting:
greet(); // TypeError: greet is not a function
var greet = function() {
    console.log("Hello!");
};
In this case, only the variable greet is hoisted, not the function expression. So, trying to call greet before the assignment results in an error.

2. Callback Function:
A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are often used in asynchronous programming, event handling, and for general code organization.
function fetchData(callback) {
  // Simulating asynchronous data fetching
  setTimeout(function() {
      const data = "Some data from the server";
      callback(data);
  }, 1000);
}
function processData(data) {
  console.log("Processing data:", data);
}
fetchData(processData);

3. Higher-Order Function:
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. These functions provide a way to abstract over actions, operations, or computations.
function multiplyBy(factor) {
  // Higher-order function returning a function
  return function(x) {
      return x * factor;
  };
}
const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // Output: 10
*/