//Калькулятор

// let Calc = function(){
//     this.get = function(){
//         this.a = +prompt('введите число a');
//         this.b = +prompt('введите число b');
//         this.oper = prompt('введите число операцию: +, -, *, /');

//         this.operation();

//     };
//     this.operation = function(){
//         switch(this.oper){
//             case '+':
//                 this.result = this.a + this.b;
//             break;
//             case '-':
//                 this.result = this.a - this.b;
//             break;
//             case '*':
//                 this.result = this.a * this.b;
//             break;
//             case '/':
//                 this.result = this.a / this.b;
//             break;
//             default: this.result = 0;

//         }
//         this.show();

//     };
//     this.show = function(){
//            alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result );

//     };

// }

// let calcul = new Calc;
// calcul.get();

// Автомобиль

let Auto = function () {
  this.getAuto = function () {
    this.markAuto = prompt("введите марку автомобиля");
    this.regNumber = prompt("ваш регистрационный номер");

    this.gearAuto = prompt(
      "на какой передаче едете: передняя, задняя, нейтралка"
    );
    this.speed = +prompt("введите вашу скорость");
    this.time = +prompt("введите время в пути в часах");

    this.direction();
    this.distance = this.time * this.speed;
  };
console.log(this.distance)
  this.direction = function(){
    this.distance = this.time * this.speed;
      switch(this.gearAuto){
          case 'передняя':
          alert('вы проехали вперёд ' + this.distance + 'км' );
          break;
          case 'задняя':
              alert('вы проехали назад ' + this.distance + 'км' );
              break;
          case 'нейтралка':
          alert('жми на педали и едь');
          break;
          default: alert('неправильные данные');
      }
  }
};
let auto = new Auto();
auto.getAuto();

// let TeaPod = function () {
//   this.get = function () {
//     this.model = prompt("введите модель чайника");
//     this.power = +prompt("мощность чайника, КВт");
//     this.middleUse = +prompt("среднее врямя пользования прибором в день, час");
//     this.coast = 0.04;
//     this.period = 365;

//     this.expencses();
    
//   };

 
//   this.expencses = function () {
//     this.money = this.period * this.coast * this.middleUse;
//     this.show();
//   };

//   this.show = function () {
//     document.write(
//       "Использование " + this.model + " обойдётся в " + this.money + " руб/год"
//     );
//   };
// };
// let teapod = new TeaPod();
// teapod.get();
