var numbers = [454, 43, 35, 34, 354, 76, 97];

function add(number1, number2) {
    number1 = 10 + 20;
    number2 = 10 + 20;
    var total = number1 + number2;

    return total;
}
var result = add();
console.log(result);

function largestNumber(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        console.log(element);
    }
}
largestNumber(numbers)