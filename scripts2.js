document.write('<br />');

//задание 1
function fun1(x, y, z) {
    result = (x - y) / z;
}
fun1(34, 2, 2);
document.write('ответ:' + result + "</br>");

//задание 2
function fun2(x){
    result_sq = Math.pow(x, 2);
    result_cube = Math.pow(x, 3);
} 
fun2(3);
document.write ('квадрат равен ' + result_sq +'; ' + 'куб равен ' + result_cube +'<br />');

//задание 3

function fun3(a, b){
    if(a>b) document.write(a +' max '+ b + ' min ')
    else document.write(a + ' min ' + b + ' max ');
    
}
fun3(8,3);
document.write('<br />');

//задание 4



