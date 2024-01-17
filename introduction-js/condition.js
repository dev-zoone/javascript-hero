// ====== CONDITIONS ======= //

var biscuitPrice = 22;
if (biscuitPrice > 23) {
    console.log("I will eat the biscuit");
} else {
    console.log("Khali cha is better");
}

var biscuitPrice = 22;
if (biscuitPrice == 23) {
    console.log("I will eat the biscuit");
} else {
    console.log("Khali cha is better");
}

var biscuitPrice = 22;
if (biscuitPrice != 23) {
    console.log("I will eat the biscuit");
} else {
    console.log("Khali cha is better");
}

var jobPaiso = true;
var savingAmount = 50000;

if (jobPaiso === false && savingAmount > 500000) {
    console.log("Aso amra patri khuji");
} else {
    console.log("Tor kopale biya nai");
}

if (jobPaiso === true && savingAmount > 500000) {
    console.log("Aso amra patri khuji");
} else if (jobPaiso == true) {
    console.log("Assa koi din pore dekbo");
} else {
    console.log("Tor kopale biya nai");
}

if (jobPaiso === true || savingAmount >= 50000) {
    console.log("Aso amra patri khuji");
} else {
    console.log("Tor kopale biya nai");
}

// GRADE CONDITIONS //

var students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];

console.log(students);

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);