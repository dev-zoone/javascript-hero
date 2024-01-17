var marks = [23, 24, 25, 26, 27, 28, 29, 30];
var max = marks[0];

for (i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element >= max) {
        max = element;
    }
}
console.log([i], 'Highest value is: ', max);

var numbers = [23, 24, 25, 26, 27, 28, 29, 30];
var sum = 0;

for (i = 0; i < numbers.length; i++) {
    var sum = sum + numbers[i];
}

console.log(sum);

var arraySum = [50, 50, 50, 50, 50, 50, 50, 50, 50];

function getArraySum() {
    var total = 0;
    for (i = 0; i < arraySum.length; i++) {
        var total = total + arraySum[i];
    }
    return total;
}
var result2 = getArraySum();
console.log(result2);