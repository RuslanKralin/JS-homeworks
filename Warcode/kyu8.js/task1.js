//This code does not execute properly. Try to figure out why.
function multiply(a,b){
    return a*b
}
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    if (bool === true) {
      return "Yes";
    } else if (bool === false) {
      return "No";
    }
  }
  
  //   Complete the solution so that it reverses the string passed into it.
  // 'world'  =>  'dlrow'
  // 'word'   =>  'drow'
  
  function solution(str) {
    return str.split("").reverse().join("");
  }
  
  //  Write a function which converts the input string to uppercase.
  function makeUpperCase(str) {
    return str.toUpperCase();
  }
  
  //удалить первый и последний символ в строке
  function removeChar(str) {
    return str.slice(1, -1);
  }
  
  function abbrevName(Ivan) {
    let t = Ivan.split(" ");
    console.log(t);
  }
  
  // You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
  // Array can contain numbers or strings. X can be either.
  // Return true if the array contains the value, false if not.
  function check(a, x) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        return true;
      }
    }
    return false;
  }
  
  // Write a function to split a string and convert it into an array of words.
  // Examples (Input ==> Output):
  // "Robin Singh" ==> ["Robin", "Singh"]
  // "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they",
  function stringToArray(string) {
    let arr = string.split(" ");
    return arr;
  }
  
  // Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
  
  // Examples (Input -> Output):
  // * "String"      -> "SSttrriinngg"
  // * "Hello World" -> "HHeelllloo  WWoorrlldd"
  // * "1234!_ "     -> "11223344!!__  "
  function doubleChar(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      newStr += str[i] + str[i];
    }
    return newStr;
  }
  
  // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
  // Example
  // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
  function smash(words) {
    return words.join(" ");
  }
  
  // We need a function that can transform a number (integer) into a string.
  // What ways of achieving this do you know?
  // Examples (input --> output):
  // 123  --> "123"
  // 999  --> "999"
  // -100 --> "-100"
  function numberToString(num) {
    return String(num);
  }
  
  // Complete the solution so that it reverses all of the words within the string passed in.
  // Example(Input --> Output):
  // "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
  function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
  }
  
  // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
  // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  // invert([]) == []
  // You can assume that all values are integers. Do not mutate the input array/list.
  function invert(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = -array[i] || -0;
    }
  
    return array;
  }
  // или
  function invert(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr.push(-array[i]);
    }
    return newArr;
  }
  // или
  //const invert = (array) => array.map((num) => -num);
  
  // You get an array of numbers, return the sum of all of the positives ones.
  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
  // Note: if there is nothing to sum, the sum is default to 0.
  function positiveSum(arr) {
    let sumPositive = 0;
    for (let i = 0; i < arr.length; i++)
      if (arr[i] > 0) {
        sumPositive += arr[i];
      }
    return sumPositive;
  }
  
  // Nathan loves cycling.
  // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
  // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
  // For example:
  // time = 3 ----> litres = 1
  // time = 6.7---> litres = 3
  // time = 11.8--> litres = 5
  function litres(time) {
    let litr = 0.5;
    let litrs = 0.5 * time;
    return Math.floor(litrs);
  }
  
  // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
  // For example:
  // summation(2) -> 3
  // 1 + 2
  // summation(8) -> 36
  // 1 + 2 + 3 + 4 + 5 + 6 + 7 +
  var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum = sum + i;
    }
    return sum;
  };
  
  // Given an array of integers, return a new array with each value doubled.
  // For example:
  // [1, 2, 3] --> [2, 4, 6]
  function maps(x) {
    let doubleArray = [];
    for (let i = 0; i < x.length; i++) {
      doubleArray.push(x[i] * 2);
    }
    return doubleArray;
  }
  
  // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
  // For example,
  // [true,  true,  true,  false,
  //   true,  true,  true,  true ,
  //   true,  false, true,  false,
  //   true,  false, false, true ,
  //   true,  true,  true,  true ,
  //   false, false, true,  true]
  function countSheeps(arrayOfSheep) {
    let sum = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        sum++;
      }
    }
    return sum;
  }
  
  //  You get an array of numbers, return the sum of all of the positives ones.
  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
  // Note: if there is nothing to sum, the sum is default to 0.
  function positiveSum(arr) {
    let sumPositive = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sumPositive += arr[i];
      }
    }
    return sumPositive;
  }
  
  // Convert number to reversed array of digits
  // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  // Example(Input => Output):
  // 35231 => [1,3,2,5,3]
  // 0 => [0]
  function digitize(n) {
    return String(n)
      .split("")
      .reverse()
      .map((i) => +i);
  }
  // или
  function digitize(n) {
    return String(n).split("").map(Number).reverse();
  }
  
  // Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
  // Examples
  // Input: [1, 5.2, 4, 0, -1]
  // Output: 9.2
  function sum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  //   Write a function which calculates the average of the numbers in a given list.
  // Note: Empty arrays should return 0.
  function findAverage(array) {
    let sumItem = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array != []) {
        sumItem++;
        sum += array[i];
      } else {
        return 0;
      }
    }
    return sum / sumItem;
  }
  
  // Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
  // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  function grow(x) {
    const res = x.reduce((acc, rec) => acc * rec);
    return res;
  }
  // или
  // const grow = (x) => {
  //   let res = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     res *= x[i];
  //   }
  //   return res;
  // };
  
  //   It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
  // Return the average of the given array rounded down to its nearest integer.
  // The array will never be empty.
  function getAverage(marks) {
    let middle = marks.reduce((a, b) => a + b) / marks.length;
    return Math.round(middle);
  }
  
  // I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
  // P.S. Each array includes only integer numbers. Output is a number too.
  function arrayPlusArray(arr1, arr2) {
    let newArray = arr1.concat(arr2);
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
      sum += newArray[i];
    }
    return sum;
  }
  
  // удалить пробелы из строки
  function noSpace(x) {
    let newstr = x.replace(/\s/g, "");
    return newstr;
  }
  // или
  function noSpace(x) {
    return x.split(" ").join("");
  }
  
  // Complete the square sum function so that it squares each number passed into it and then sums the results together.
  // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
  function squareSum(numbers) {
    let newCollection = numbers.map((x) => x ** 2);
    let sum = 0;
    for (let i = 0; i < newCollection.length; i++) {
      sum += newCollection[i];
    }
    return sum;
  }
  // или
  function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + num * num, 0);
  }
  
  //Вставить переменную в строку
  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }
  
  // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
  // Examples:
  // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
  // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
  // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
  // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7
  function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
      return true;
    } else {
      return false;
    }
  }
  //или
  function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  
  // Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
  // Examples (Input -> Output)
  // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
  // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  var min = function (list) {
    return Math.min(...list);
  };
  var max = function (list) {
    return Math.max(...list);
  };
  
  // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
  // Considering these factors, write a function that tells you if it is possible to get to the pump or not.
  // Function should return true if it is possible and false if not.
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump ? true : false;
  };
  // Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
  // Can you help her?
  function greet(name) {
    if (name === "Johnny") {
      return "Hello, my love!";
    }
    if (name != "Johnny") return "Hello, " + name + "!";
  }
  
  // Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
  // Example:
  // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
  function removeEveryOther(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr.splice(i + 1, 1);
    }
    return arr;
  }
  // или
  function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }
  
  // Given a number n, return the number of positive odd numbers below n, EASY!
  // Examples (Input -> Output)
  // 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
  // 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
  // Expect large Inputs!
  function oddCount(n){
    return Math.floor(n/2);
  }
  // Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
  // Example: (Input1, Input2 -->Output)
  // "4",  "5" --> "9"
  // "34", "5" --> "39"
  // "", "" --> "0"
  // "2", "" --> "2"
  // "-5", "3" --> "-2"
  function sumStr(a,b) {
    return String(+a + +b);
  }
  
  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
  // Hint for R users:
  // The length of string is not always the same as the number of characters
  // For example: (Input1, Input2) --> output
  // ("1", "22") --> "1221"
  // ("22", "1") --> "1221"
  function solution(a, b){
    
    if(a.length > b.length){
      return b+a+b;
    }
    else if(a.length < b.length){
      return a+b+a;
    }
    
  }
  
  //или 
  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }
  
  // Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
  // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
  function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 ==1){
      return true;
    }
     else if(flower1 % 2 ==1 && flower2 % 2 ==0){
      return true;
    }
    else 
      return false;
  }
  // или
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

  // Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    if (b == true){
      return String('true')
    }
    else if (b == false){
      return String('false')
    }
  }

  // Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
    if(weight/(height**2) <=18.5)
       return "Underweight";
    else if(weight/(height**2) <= 25.0)  
      return "Normal";
     else if(weight/(height**2) <= 30.0)  
      return "Overweight";
     else if(weight/(height**2) > 30)  
      return "Obese";       
  }

  // You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function(l , w) {
    let square = l*w;
    let perimeter = l*2 + w*2;
    if(l === w){
      return square
    }
    else {
      return perimeter
     }
      
  };

 // Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
function basicOp(operation, value1, value2)
{
 
  switch(operation) {
      case '+':
      return value1 + value2;
      case '-':
      return value1 - value2;
      case '/':
      return value1 / value2;
      case '*':
      return value1 * value2;
  }

}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] >= 0){
        sum += arr[i];
      }
    }
      return sum;
  }

  //This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    if(number % 2 == 0){
      return number*8;
    }
  else if(number % 2 !==0){
    return number*9;
  }
}

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
function numberToString(num) {
    let a = String(num);
    return a;
  }

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    if(num > 0){
      return -num;
    }
    else if(num <= 0){
      return num;
    }
  }
