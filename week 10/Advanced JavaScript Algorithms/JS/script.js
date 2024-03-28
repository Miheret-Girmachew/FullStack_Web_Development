//alert("your JS file is connected!!");
/* Advanced JavaScript Algorithms - practice exercise */

/*
Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
*/
// console.log("### Question 1");
// function getOnlyEvens(nums) {
//     if (!Array.isArray(nums)) {
//         console.error("Input is not an array.");
//         return;
//     }
//     // const result = nums.filter((num, index) => num % 2 === 0 && index % 2 === 0);

//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0 && i % 2 === 0) {
//             result.push(nums[i]);
//         }
//     }
//     console.log(result);
// }
// console.log("Test 1:");
// getOnlyEvens([1, 2, 3, 6, 4, 8]);
// console.log("\nTest 2:");
// getOnlyEvens([0, 1, 2, 3, 4]);


/*
Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
*/
// console.log("\n### Question 2");
// function reverseCompare(number) {
//     if (typeof number !== 'number'){
//         console.error("Input must be number!");
//         return;
//     }
//     else if(number < 10 || number > 99){
//         console.error("Input must be a two-digit number!");
//         return;
//     }

    // let reversedNumber = 0;
    // while (number > 0) {
    //     reversedNumber = reversedNumber * 10 + (number % 10);
    //     number = Math.floor(number / 10);
    // }
    // return reversedNumber;

//    const reversedNumber = parseInt(number.toString().split('').reverse().join(''));

//     if (number > reversedNumber) {
//         console.log("Ok");
//     } else {
//         console.log("Not ok");
//     }
// }
// console.log("Test 1:");
// reverseCompare(72);
// console.log("\nTest 2:");
// reverseCompare(23);
// console.log("\nTest 3:");
// reverseCompare(123);


/*
Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1
*/
// console.log("\n### Question 3");
// function returnFactorial(num) {
//     if (typeof num !== 'number'){
//         console.error("Input should be number");
//         return;
//     }
//     else if (!Number.isInteger(num)) {
//         console.error("Input must be an integer.");
//         return;
//     }
//     else if (num < 0 ){
//         console.error("Input should have to be positive integer!");
//         return;
//     }
//     if (num === 0) {
//         return 1;
//     }

//     return num * returnFactorial(num - 1);
// }

    // let factorial = 1;
    // for (let i = num; i > 0; i--) {
    //     factorial *= i;
    // }
    // return factorial;
// }


// console.log("Test 1:");
// console.log(returnFactorial(5)); 
// console.log("\nTest 2:");
// console.log(returnFactorial(6));
// console.log("\nTest 3:");
// console.log(returnFactorial(0));

/*
Question 4 (Meera array)
● A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
*/
// console.log("\n### Question 4");
// function checkMeera(nums) {
//     if (!Array.isArray(nums)) {
//         console.error("Input is not an array.");
//         return;
//     }
//     else if (nums.length === 0) {
//         console.error("Array cannot be empty.");
//         return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] !== 'number') {
//             console.error("Array must contain only numbers.");
//             return;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (nums.includes(nums[i] * 2)) {
//             console.log("I am NOT a Meera array");
//             return;
//         }
//     }

//     console.log("I am a Meera array");
// }

// console.log("Test 1:");
// checkMeera([10, 4, 0, 5]); 
// console.log("\nTest 2:");
// checkMeera([7, 4, 9]); 
// console.log("\nTest 3:");
// checkMeera([1, -6, 4, -3]); 


/*
Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times, instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/

console.log("\n### Question 5");
function isDual(nums) {
    if (!Array.isArray(nums)) {
        console.error("Input is not an array.");
        return;
    }
    else if (nums.length % 2 !== 0) {
        console.error("Input should be even number of times.");
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') {
            console.error("Array must contain only numbers.");
            return;
        }
    }
    const countMap = {};
// countMap = {1:2, 2:2, 3:2}
// countMap = {1:2, 2:2, 3:2 }
// countMap[1]=1
// countMap[1]=4

    for (let i=0; i< nums.length; i++) {
        countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    }

    for (let num in countMap) {
        if (countMap[num] !== 2) {
            return 0; 
        }
    }
   
    return 1; 
}
console.log("Test 1:");
console.log(isDual([1, 2, 1, 3, 3, 2])); 
console.log("\nTest 2:");
console.log(isDual([2, 5, 2, 5, 5])); 
console.log("\nTest 3:");  
console.log(isDual([3, 1, 1, 2, 2]));
console.log("\nTest 4:");  
console.log(isDual([2, 1, 1, 1]));  
console.log("\nTest 5:");  
console.log(isDual([1, 1, 1, 1]));

/*
Question 6
● Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.

*/
console.log("\n### Question 6");
function digitalClock(seconds) {
    const hours = Math.floor((seconds / 3600)%24);
    const day = Math.floor((seconds / 3600)/24);

    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${day}: days
    ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    

}

console.log("Test 1:");
console.log(digitalClock(5025)); 
console.log("\nTest 2:");
console.log(digitalClock(61201)); 
console.log("\nTest 3:");
console.log(digitalClock(87000));

