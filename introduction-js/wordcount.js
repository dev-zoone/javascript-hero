var speech = "I am a   front-end developer and back end developer";
var count = 0;
for (i = 0; i < speech.length; i++) {
    var chea = speech[i];
    if (chea == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);