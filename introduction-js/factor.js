// ============= FOR LOOPES FACTORIAL ============== //
var factor = 1;
for (var i = 1; i <= 5; i++) {
    var factor = factor * i;
    // console.log(i, fact);
}
console.log(factor);

// ============= FUNCTION FACTORIAL ============== //
function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        var factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(10);

console.log(result);

// ============= WHILE LOOPES FACTORIAL ============== //
var i = 1;
var fact = 1;
while (i <= 10) {
    fact = fact * i;
    i++;
}
console.log(fact);

// ============= FACTORIALS RECURSIVE ============== //
// function factorialIs(n) {
//     // var facto = 1;
//     // for (i = n; i => 1; i--) {
//     //     facto = facto * i;
//     //     // console.log(i, facto);
//     // }
// }
// factorialIs(n);

function vactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        // return n * vactorial(n - 1);
        return vactorial(n - 1) * n;
    }
}
var result = vactorial(5);
console.log(result);