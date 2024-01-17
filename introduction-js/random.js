var num = 3.232;
//  math.floor(); function akti floot sonkha ke intser a rupantor kore ////
var result = Math.floor(num);
// math.ceil(); fundtion akta floot sonkha ke man 1 bariy print kore //
var result2 = Math.ceil(num);
// math.round(); function akta floot sonkha ke 2.49 hole 2 print kore ar 2.99 hole 3 parint kore //
var result3 = Math.round(num);

console.log(result, result2, result3);

for (i = 0; i < 10; i++) {
    var randomNum = Math.random() * 6;
    var outPut = Math.round(randomNum);
    console.log(outPut);
}

var bus = 250;
var cho = 450;
var mins = 650;

var max = Math.max(bus, cho, mins);
console.log('\n max value of 3 comprmize is bigger', max);