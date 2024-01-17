function fibonacci(n) {
    const fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci(51);
console.log(result);



var dibo = [2, 3]
for (var i = 2; i < 10; i++) {
    dibo[i] = dibo[i - 1] + dibo[i - 2];
}
console.log(dibo);