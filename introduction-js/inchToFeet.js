var inch = 144;
var feet = inch / 12;

console.log(feet);

function inchToFeet(inch) {
    var feet = inch / 12;

    return feet;
}

var nani = inchToFeet(156);
var nana = inchToFeet(300);

console.log(nani, nana);

var senior = [156, 288, 300, 144];

for (var i = 0; i < senior.length; i++) {
    var inch = senior[i] / 12;
    console.log(inch);
}