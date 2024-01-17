var names = [23, 24, 26, 26, 27, 27, 29, 30]
var uniqueName = [];

for (i = 0; i < names.length; i++) {
    var elements = names[i];
    var index = uniqueName.indexOf(elements);
    if (index == -1) {
        uniqueName.push(elements);
    }
}

console.log(uniqueName);