document.write("<br />");

//задание 1
function fun1(x, y, z) {
     return  x+y/z;
}

let a = fun1(34, 2, 2)
console.log(a)
document.write('ответ:' + a + "</br>");

//задание 2

function fun2(x){
    result_sq = Math.pow(x, 2);
    result_cube = Math.pow(x, 3);
}
fun2(3);
document.write ('квадрат равен ' + result_sq +'; ' + 'куб равен ' + result_cube +'<br />');

//задание 3

function fun3(a, b) {
  if (a > b) {
    document.write(a + " max " + b + " min ");
  } else {
    document.write(a + " min " + b + " max ");
  }
}
fun3(8, 25);
document.write("<br />");

//задание 4



/*задание 5 (Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.)*/
function isEven(x){
    if(x%2===0)
        return true; 
    else return false
          
}



