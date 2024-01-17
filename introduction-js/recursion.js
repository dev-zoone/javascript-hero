 function factorialRecursive(num) {
     if (num == 0) {
         return 1;
     } else {
         return num * factorialRecursive(num - 1);
     }
 }
 console.log("factorial 5 = ", factorialRecursive(5));

 function fibonacciRecursive(fibo) {
     if (fibo == 0) {
         return 0;
     }
     if (fibo == 1) {
         return 1;
     } else {
         return fibonacciRecursive(fibo - 1) + fibonacciRecursive(fibo - 2);
     }
 }
 console.log("fibonacci 10 = ", fibonacciRecursive(10));