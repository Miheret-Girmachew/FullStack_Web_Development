//alert("your JS file is connected!!");
// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.
function numbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  numbers()
// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
function fiveFollowing(num) {
  if (typeof num!=='number') {
    console.log("The value should be number!");
    return;
  }
  for (let i = num + 1; i <= num + 5; i++) {
    console.log(i);
  }
}
fiveFollowing(7);
fiveFollowing("s"); 

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
function summ(num) {
  if (typeof num!=='number') {
    console.log("The value should be number!");
    return;
  }
  let total=0;
  for(let i=num+1; i<=num+10; i++){
    total+=i;
  }
  console.log(total);
}
summ(7);  
summ("s");
// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
function elements(array) {
  if (!Array.isArray(array)) {
      console.log("Value should be array");
      console.error("Value should be array");
      return;
  }
  for (let i=0; i<array.length; i++) {
      console.log(array[i]);
  }
}
const array=[1, "Hello", 8, 44];
elements(array);
  /*
  function printArrayElements(arr) {
  for (let element of arr) {
    console.log(element);
  }
}
*/
// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
function arrayLength(array) {
  if (!Array.isArray(array)) {
      console.log("Input should be array!");
      return;
  }
  console.log(array.length);
}
const arr1 = [1, "Hello", 8, 44];
const arr2 = ["world", 13];
arrayLength(arr1); 
arrayLength(arr2); 

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
function sumNumbers(nums){
  if(!Array.isArray(nums)){
    console.error("Input is not an array.");
    return;
  }
  let summ=0;
  for(let num of nums){
    if(typeof num!=="number") {
      console.log("The array contains a value which is not a number!");
      console.error("The array contains a value which is not a number!");
      return;
    }
    summ+=num;
  }
  console.log(summ);
}
const nums1 = [5, 6, 99, 8, 76, 4, 68, 44];
const nums2 = [3, 0];
const nums3 = [3, 'a', 0]; 
sumNumbers(nums1); 
sumNumbers(nums2); 
sumNumbers(nums3); 

// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
function parityDifference(nums) {
  if (!Array.isArray(nums)) {
    console.error("Input is not an array.");
    return;
  }
  let even=0;
  let odd=0;
  for(let num of nums) {
    if(typeof num!=="number"){
      console.error("The array contains a value which is not a number!");
      return;
    }
    if(num%2===0) {
      even+=num;
    }else{
      odd+=num;
    }
  }
  console.log(even-odd);
}
const nums = [5, 6, 99, 8, 76, 4, 68, 44];
parityDifference(nums);

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)              
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
function evenIndex(array) {
  if(!Array.isArray(array)){
    console.error("Input is not an array!");
    return;
  }
  for(let i=0; i<array.length; i+=2){ 
    console.log(array[i]);
  }
  // for(let i=0; i<array.length; i++){
  //   if(i%2===0){
  //       console.log(array[i]);
  //   }
  // }
  
}
const array1=[5, 6, 99, 8, 76, 4, 68, 44];
const array2=[11, "Sam", 3, 7, "car"];
const array3="Abebe";
evenIndex(array1); 
evenIndex(array2); 
evenIndex(array3);

  
// Questions on built in JavaScript methods
// ***********************************
// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
function removeAndPush(sampleArray) {
    sampleArray.pop();
    sampleArray.push(32);
    console.log(sampleArray);
  }
  removeAndPush(sampleArray)

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});
function sortArray(arr) {
  const sortedArray=arr.sort(function(a, b){
    return a-b;
  });
  console.log(sortedArray);
}
sortArray(sampleArray);

// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: [
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// }
// ]
// }
let evangadiClass={
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M"
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M"
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F"
    },
    {
      name: "Challa",
      age: 22,
      sex: "M"
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F"
    }
  ]
};

// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change
evangadiClass.lengthOfCourse="5 Month";
console.log(evangadiClass);

console.log(" ")
evangadiClass.phase2="javaScript"
console.log(evangadiClass);
// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
// evangadiClass.topicsCovered.push("Bootstrap");
evangadiClass.topicsCovered.unshift("Bootstrap");
evangadiClass.topicsCovered[2]="Bootstrap";
evangadiClass.topicsCovered.splice(3, 1, "checkk");


// array = [a, c, d ]  // a, b, c
//                  // a, b
//          0, 1
// array.splice(1, 1, "b") 
// array.splice(1, 0, "b") 


console.log(evangadiClass);
// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

function calculateAverageAge(evangadiClass) {
  let totAge=0;

  for (let i= 0; i < evangadiClass.students.length; i++) {
    totAge = totAge + evangadiClass.students[i].age
    // totAge+=student.age;
  }
  let aveAge= totAge/evangadiClass.students.length;
  console.log("The average age is :", aveAge);



  // for (let student of evangadiClass.students) {
  //   totAge = totAge + student.age;
  //   // totAge+=student.age;
  // }
  // let aveAge= totAge/evangadiClass.students.length;
  // console.log("The average age is :", aveAge);
}
calculateAverageAge(evangadiClass);

// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
function calculatePercentageMale(evangadiClass) {
  let fCount=0;
  for(let student of evangadiClass.students){
    if(student.sex==="F"){
      fCount = fCount + 1
      // fCount++;
    }
  }
  // 0.4 * 100 = 40
  let FemalePercent= (fCount / evangadiClass.students.length)*100;
  console.log("The percentage of  female students in the class is : ", FemalePercent + "%");
  // console.log("The percentage of male students in the class is : ", MalePercent.toFixed(2) + "%");
}
calculatePercentageMale(evangadiClass);

// Puzzles
// *******
// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
function Divisibility3(low, high) {
  if (typeof low!=='number' || typeof high!=='number') {
    console.error("The values should have to be numbers!");
    return;
  }
  if(low>high){
      console.error("Low value should be less than the high value!");
      return;
    }

  for(let i=low; i<=high; i++) {
    let num=i;
    if (i % 3 === 0) {
      num+=" div3";
    }
    console.log(num);  
  }
}
Divisibility3(2, 6);
Divisibility3(1, 10);
Divisibility3(10, 1); 
Divisibility3(1, "a"); 
Divisibility3(0, 10); 


// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(){
    for(let i=1; i<=100; i++){

      if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
      }else if(i%3===0){
        console.log("Fizz");
      }else if(i%5===0){
        console.log("Buzz");
      }else{
        console.log(i);
      }
    }
  }
  fizzBuzz()

  
// Question 17: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.

function isEvens(number){
  if(typeof number!=='number') {
    console.log('Input should be number!');
    return;
  }
  const digits = number.toString(); 
  for(let a of digits){
  if(parseInt(a)%2!==0){
    console.log(0);
    return;
  }
}
  console.log(1);





  // for (let i=0  ; i< digits.length ; i++){
  //   if (!(parseInt(digits[i])%2 ===0)){ 
  //     console.log("0");
  //     return;
  //   }
  //   console.log("1");
  //   return;
  // }




}
isEvens(2426); 
isEvens(3224);

// function isEvens(number){
//   if(typeof number!=='number') {
//     console.log('Input should be number!');
//     return;
//   }
  
//   while(number>0){
//     let digit=number%10;
//     number = Math.floor(number / 10); 
//     if(digit%2===1){
//       console.log(0);
//       return;
//     }
//   }
//   console.log(1);
// }
// isEvens(2426); 
// isEvens(3224);



