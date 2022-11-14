let input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];



function countPositivesSumNegatives(input) {
  let sumPositive = 0;
  let sumNegative = 0;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        sumPositive++
       
    } else {
      sumNegative += input[i];
    }
  }
  result.push(sumPositive, sumNegative );
  console.log(result)
  
}
countPositivesSumNegatives(input)



let num = 12345;
let str = num.toString();
console.log(str);
let result = 0;
for(let i = 0; i <str.length; i++){
  result += str[i]*str[i]
}
console.log(result)

let num1 = '9119'.split``.map(cur => Math.pow(cur,2));
console.log(num1);
+num1.join('');
console.log(num1);

let numbers = '1 2 3 4 5';
console.log(numbers)
let numbersStr = numbers.replace(/\s/g, '');
console.log(numbersStr)
// let arr = str2.split('')
// console.log(arr)
let arr3 = [1,2,3,4,5];
let max = Math.max.apply(null, arr3)
console.log(max);
let min = Math.min.apply(null, arr3)
console.log(min);


let arr4 = [];
if(arr4.length ==0){
  console.log('no one likes it')
}
if(arr4.length = 1){
  console.log(' one likes it')
}



let arr5 = '12 34 456'
console.log(arr5);
let arr6 = arr5.split(',')
console.log(arr6);