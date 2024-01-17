var a = 10;
var b = 20;
var temp = a;
a = 20;
b = temp;

console.log(a, b);


var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log('x = ', x, 'y = ', y);

// THIS IS JS SPECIAL TECHNIC FOE DATA SWAPE //

var p = 4;
var q = 9;

[p, q] = [q, p, q];

console.log('after swap: p = ', p, 'before swap: q = ', q);