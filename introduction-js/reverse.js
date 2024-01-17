// string ke reverse koro 15.8 video
function reverseString(statement) {
    var reverse = "";
    for (i = 0; i < statement.length; i++) {
        var char = statement[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien bhai  brother."

var forAlean = reverseString(statement);
console.log(forAlean);