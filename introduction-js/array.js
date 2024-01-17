// DATE //

var date = new Date();
console.log("to day " + date);

// ==== ARRAY JS ===== //

var firendAge = [32, 12, 35, 23, "shakil", 15, 33, 22, 43];

// unshift kore array er first element add kora hoy;
firendAge.unshift("Ahmad");
// shift kore array er first element remove kora hoy;
// push kore array er last element add kora hoy;
firendAge.push("bappy");
// pop kore array er last element remove kora hoy;
firendAge.pop();

var shakilAge = firendAge[4];
var position = firendAge.indexOf("shakil");
firendAge[1] = 21;

console.log("Array All Data", firendAge);
console.log("Array Index Num ", position);
console.log("Type cast variable", shakilAge);
console.log("Array position ", firendAge[3], firendAge[67]);


// ======= ARRAY SLICE JS ======= //
var slis = ['salam', 'kalam', 'talam', 'palam', 'akim', 'alim', 'kolim', ];

console.log(slis.slice(2, 6));