var number1 = 30;
var number2 = '434.34';
number2 = +(number2);
number2 = Number(number2);
// number2 = Number(10.34);

console.log(number1 + number2);

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
// toFixed diye floot num er . 1(dosomik) er pore koyti sonkha nibo tar jonno //     
total = total.toFixed(3);
console.log(total);

var numb = -5;
var numb2 = 5.40643;
// Math.absolute diye akti reenattok num ke dhonattok kora hoy //
var absoluteNumber = Math.abs(numb);
// Math.round diye akti floot num ke purno num a rupantor kora //
var result = Math.round(numb2);

console.log(absoluteNumber);
console.log(result);

var num = 5.409999;
var numb = 4.53432;

var result = Math.ceil(num);
var res = Math.floor(numb);

console.log(result);
console.log(res);

var rand = Math.random();
// var resul = Math.round(rand);
var flo = Math.round(Math.random() * 100);

console.log(rand);
console.log(flo);