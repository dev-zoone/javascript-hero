const year = 2023;
const remainder = year % 4;

console.log(remainder == 0);

if (remainder == 0) {
    console.log("your year is leapyear");
} else {
    console.log("your year is not leapyear");
}

function isLeapYear() {
    if (remainder == 0) {
        // console.log("your year is leapyear");
        return true;
    } else {
        // console.log("your year is not leapyear");
        return false;
    }
};

const rimaind = isLeapYear();
console.log(rimaind);


// function isLeapYear() {
//     const rimaind = year % 4;
//     // console.log(rimaind);
//     return rimaind;
// };
// const result = isLeapYear();
// console.log(result);
function isLeapYear() {
    const resust = remainder;
    return resust;
}
isLeapYear();