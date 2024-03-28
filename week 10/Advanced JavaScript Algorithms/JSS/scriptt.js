// alert("your JS file is connected!!");
// console.log("\n### Question 1");

// function checkLetters(strr){
//     if(typeof strr != "string"){
//         console.log("Only string");
//     }
    // let answer = ""
//     for( let i=0; i < strr.length; i++){
//         if (strr[i]===strr[i].toLowerCase()){
//             answer = answer + strr[i]
//         }
//     }
//     return answer;
// }
// // console.log(checkLetters("AhoMmNe"));
// function hiddenWord(w) { 
//     let words = "";
//     for (let i = 0; i < w.length; i++) {
//     // let x = w.charAt(i);
//     w.charAt(i) == w[i]
//     if (w[i] == w[i].toLowerCase()) {
//         words += x;
        
//     }
//     }
//     return words
// }
// console.log(hiddenWord("AhoMmNe"));



// console.log("\n### Question 2");
// /*
//  Create a js function that returns true if the first array can be nested inside the second array . Example : passed argument:[3,5] and [2,5,7,8] : return true;
//  */
//  function nested(arr1, arr2) {
//     let a = arr1.sort();
//     let b = arr2.sort();
//     let min1 = arr1[0];
//     let min2 = arr2[0];
//     let max1 = a[arr1.length - 1];
//     let max2 = b[arr2.length - 1];
//   if (min1 > min2 && max1 < max2) { return true 
    
//   }  return false
    
    
//   }
//   console.log(nested([3, 4, 5], [2, 5, 7, 8]));
// function checkNest(arr1, arr2){
//     if (!Array.isArray(arr1)) {
//         console.error("Input is not an array.");
//         return;
//     }

//     if (!Array.isArray(arr2)) {
//         console.error("Input is not an array.");
//         return;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (typeof arr1[i] !== 'number') {
//             console.error("Array must contain only numbers.");
//             return;
//                 }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (typeof arr2[i] !== 'number') {
//             console.error("Array must contain only numbers.");
//             return;
//         }
//     }
  
//     const max = arr1.reduce((a, b) => { return Math.max(a, b) }); 
//     const min = arr1.reduce((a, b) => { return Math.min(a, b) }); 

//     const maxx = arr2.reduce((a, b) => { return Math.max(a, b) }); 
//     const minn = arr2.reduce((a, b) => { return Math.min(a, b) }); 

//     if ( max < maxx && min > minn){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(checkNest([3, 4, 5], [2, 5, 7, 8]));

/*
Question ##3
Magic Array  exercise:
An array is defined to be magic array if the sum of the prime in the array is equal to the first element of the array.If there are no primes in the array, the first element 0.  so [21,3,7,9,11,4,6] is amagic array because 3,7 and 11 are the prime in the array and the sum to 21 which is the first element of the array.[13,4,4,4,4] is also a magic array becuase the sum of prime numbersis 13 which is also the first element . other magic arrays are [10,5,5,], but [0,6,8,20] and [3], [8,5,-5,5,3] is not a magic array because the sum of the prime is 5+5+3 = 13. Note:-5 is not a prime becuase prime numbers are positive.*/

// console.log("\n### Question 3");
// // [21,3,7,9,11,4, 6 ] 
// function magicArray(nums){
//     if (!Array.isArray(nums)) {
//         console.error("Input is not an array.");
//         return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] !== 'number') {
//             console.error("Array must contain only numbers.");
//             return;
//         }
//     }
    // [21,3,7,9,11,4,6]  0 or 1 
// To find whether a larger number is prime or not, add all the digits in a number, if the sum is divisible by 3 it is not a prime number. Except 2 and 3, all the other prime numbers can be expressed in the general form as 6n + 1 or 6n - 1, where n is the natural number

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 25 

//    23 = 6n + 1 =  6(23 - 1)
//    23 = 6n - 1 = 6(23 + 1)

//     let primeSum = 0;
//     for (let i = 0 ; i < nums.length ; i ++){
//         if (nums[i] <= 1){
//             continue;
//         }
//         let found = false;
//         for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
//             if (nums[i] % j === 0) {
//                 found = true;
//             }
//         }
//         if (found == false){
//             primeSum += nums[i];
//         }
//     } 


//     if (nums[0] === primeSum){
//         console.log("Magic Array")
//         return
//     }
//     else{
//         console.log("Not Magic Array")
//     }

//     }
// magicArray([21, 3, 7, 9, 11, 4, 6 ]);
// magicArray([13, 4, 4, 4, 4]);
// magicArray([0, 6, 8, 20]);
// magicArray([10, 5, 5]);
// magicArray([8, 5,-5, 5, 3]);
// magicArray([3]);


/*
question ##4
create a js function that takes the an array of numbers and return both the minimum and maximum numbers, in that order inside another array.
example: passed argument [1,2,3,4,5] and the answer is [1,5]
*/

console.log("\n### Question 4");

function minMaxArray(nums) {
    if (!Array.isArray(nums)) {
        console.error("Input is not an array.");
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== 'number') {
            console.error("Array must contain only numbers.");
            return;
        }
    }
    // let minimum = nums.reduce((a, b) => { return Math.min(a, b) });
    // let maximum = nums.reduce((a, b) => { return Math.max(a, b) });

    nums.sort();
    let minimum = nums[0];
    let maximum = nums[nums.length-1]
    
    // let answer = [];
    // answer.push(minimum);
    // answer.push(maximum);
    // return answer;

    console.log([minimum, maximum]);
    return;

}
// console.log(minMaxArray([1, 2, 3, 4, 5]));

minMaxArray([1, 2, 3, 4, 5]);

console.log("\n### Question 5");

/*
question ##5
Create js function that takes a number as its argument and returns an array of all its factors.
example:  passed argument 12 answer: return [1,2,3,4,6,12]
*/

function factors(num){
    answer = []
    for (let i = 1 ; i <= num ; i++){
        if (num % i === 0){
            answer.push(i);
        }
    }
return answer;
}
console.log(factors(12));
console.log(factors(11));

/*
question ##6
Given a number, return an array conataining the two halves of the number. if the number is odd , make the right most number higher . 
example: passed argument 4 answer : retrun [2,2] 
*/
// 0, 1, 2, 3, 4, 5      2.5 = 2
console.log("\n### Question 6");

function halfArray(number) {
    if (typeof number !== 'number') {
        console.error(" Input must be number.");
        return;
    }

    let left = 0;
    let right = 0;

    if (number % 2 == 0){
        left = number/2;
        right = left;
    }
    else{
        left = Math.floor(number/2)
        //left = int(number/2)
        right = left + 1
    }
    console.log([left, right]);
    return
    
}

halfArray(4);
halfArray(5);