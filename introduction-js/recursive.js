function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        // return n * vactorial(n - 1);
        return factorial(n - 1) * n;
    }
}
var result = factorial(5);
console.log(result);


function fibo(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

var result = fibo(3);
console.log(result);

// ====**********************************=====//

//  leap year     
// var year = 2019;


// console.log(leapyear);
// function isLeapYear(n) {
//     var leapyear = n % 4;
//     if (leapyear == 0) {
//         console.log("Your Year is LeaypYear");
//     } else {
//         console.log("Your Year is not LeaypYear");
//     }
//     return leapyear;
// }
// var remainder = isLeapYear(2000);
// console.log(remainder);


// var factorial = 1;
// for (i = 1; i <= 15; i++) {
//     factorial = factorial * i;
//     // return factorial;
// }
// var result = factorial;
// console.log(result);

// var i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// function fibonacci(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// var resul = fibonacci(50);
// console.log(resul);