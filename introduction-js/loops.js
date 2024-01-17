// ======= WHILE LOOPES JS ===== //

var num = 10;
while (num <= 15) {
    console.log(num);
    num++;
}

// ====== for loopes js ======= //

for (var i = 0; i < 5; i++) {
    console.log(i);
}

var nums = [33, 44, 56, 45, 334, 34, 88];

for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    console.log(element);
}

// ================= SWITCH JS ====== //

num = 100;
switch (num) {
    case 2000:
        console.log('I am 2000');
        break;
    case 1000:
        console.log('I am 1000');
        break;
    case 500:
        console.log('I am 500');
        break;
    default:
        console.log("I don't know who you are");
}