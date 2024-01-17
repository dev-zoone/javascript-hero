//  array sum js 15.5 gideo

var numbers = [343, 34, 43, 243, 24, 56, 45, 234, 55];
var sum = 0;

for (i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
}
console.log(sum);

function getArraySum(numbers) {
    var sumAll = 0;
    for (i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        sumAll = sumAll + elements;
    }
    return sumAll;
}
var result = getArraySum([20, 30, 50]);
console.log(result);