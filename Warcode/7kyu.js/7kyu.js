// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// или

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
  str = str.replace(/[aeiouAEOUI]/gi, "");
  return str;
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
  let result = String(num).split``.map((e) => e * e).join("");

  return Number(result);
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let arr = [];
  numbers.forEach(function (elem) {
    arr.push(Number(elem));
  });

  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max + " " + min;
}
//или
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

//   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//   #Examples:
//   Kata.getMiddle("test") should return "es"
//   Kata.getMiddle("testing") should return "t"
//   Kata.getMiddle("middle") should return "dd"
//   Kata.getMiddle("A") should return "A"
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, 2 - (s.length % 2));
}
//или
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
var isSquare = function (n) {
  //let square = Math.sqrt(n)
  if (n >= 0 && Number.isInteger(Math.sqrt(n))) {
    return true;
  }
  return false;
};

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
function minMax(arr) {
  let res = [];
  let min = Number(Math.min(...arr));
  let max = Number(Math.max(...arr));
  res.push(min, max);
  return res; // fix me!
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n) {
  let N = String(n)
    .split("")
    .map((i) => +i)
    .sort((a, b) => b - a);
  return +N.join("");
}
// или
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
  return l.filter((n) => typeof n === "number");
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {  
  let newNumbers = numbers.sort((a,b) => a-b);
  return newNumbers[0] + newNumbers[1];
}