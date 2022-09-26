//задание 1
let name, age, city, phone, email, company;
name = prompt ('Ваше имя?', 'Руслан');
age = prompt ('Ваш возраст?', '39');
city = prompt ('где вы проживаете?', 'г.Минск');
phone = prompt ('ваш номер телефона', '+375297888192');
email = prompt ('ваша почта', 'kralin.front@gmail.com');
company = prompt ('где вы работаете?', 'ООО Рога и копыта');

//задание 2
let year = 2022-age;
document.write(name,' родился в',' ', year , ' году');

//задание 3 


//задание 4
let x = 1;
if (x > 0) console.log('верно')
else console.log('не верно');

//задание 5
let a = 10,
    b = 2;

let sum = a+b;
console.log(sum);

let raznost = a - b;
console.log(raznost);

let proizved = a * b;
console.log(proizved);

let delenie = a / b;
console.log(delenie);

let summaNumber = sum + raznost + proizved + delenie;
if (summaNumber>1)
console.log (summaNumber**2);

//задание 6
if (a > 2 && a < 11 || b >= 6 && b < 14) console.log('верно')
      else
  console.log('не верно');

//задание 7
let n = '58';
if (n > 0 && n <= 15) console.log('первая четверть часа');
if (n > 15 && n <= 30) console.log('вторая четверть часа');
if (n > 30 && n <= 45) console.log('третья четверть часа');
if (n > 45 && n <= 59) console.log('четвёртая четверть часа');

//задание 8
let day = '11';
if (day > 0 && day <= 10) console.log('первая декада');
if (day > 10 && day <= 20) console.log('вторая декада');
if (day > 20 && day <= 30) console.log('третья декада');

//задание 9
let days = 30;
let years = days/365; 
console.log(years +' лет');

let months = days/30; 
console.log(months +' месяца');

let weeks = days/7; 
console.log(weeks +' недель');

let hours = days*24; 
console.log(hours +' часов');

let minutes = days*1440; 
console.log(minutes +' минут');

let seconds = days*86400; 
console.log(seconds +' секунд');


//задание 10



