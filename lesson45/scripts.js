//задание 1
let arr = [1,2,3,4,5];
for(let i = 0; i <=arr.length; i++){
    console.log(arr[i]);
}
//задание 2
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i = 0; i <=arr2.length; i++){
    if(arr2[i]>-10 && arr2[i] <-3) console.log(arr2[i]);
}
//задание 3
let arr3 = [];
for(let k = 23; k <= 57; k++ ){
      arr3.push(k);
  }
console.log(arr3);

let arr4 = [];
let r = 23;
while(r <=57){
    arr4.push(r);
    r++;
}
console.log(arr4);

let sum = 0;
for(k=23; k <= 57; k++){
    sum += k;
}console.log(sum);

//задание 4
let arr5 = ['10', '20', '30', '50', '235', '3000'];





//задание 5
let arr6 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for(let i = 0; i <= arr6.length; i++){
    if(i>4){
        document.write('<strong>' + arr6[i] +'</strong>' + ' ')
    }else document.write(arr6[i] + ' ');
};
document.write('<br />');

//задание 6
let arr7 = ['Маша', 'Петя', 'Коля'];
arr7.push('Иннокентий');
document.write(arr7);
document.write('<br />');
document.write(arr7.slice(-1));

document.write('<br />');

//задание 7





//задание 8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
document.write(arr8.reverse());
document.write('<br />');

// задание 9
let arr9 = [5, 9, 21, , 9, 78, , , , 6];
let sum1 = 0;
for(let i=0; i<=arr9.length; i++){
   if(typeof arr9[i] == 'undefined'){ sum1 ++;}
   
}document.write(sum1);

//задание 10

