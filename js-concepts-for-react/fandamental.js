// 1. how to declare a variable using let and const
const fatherName = 'Aronld';
let season = 'rainy';
season = 'winter';

// 2. condition <,>,===, =>,=<,!==;
// multiple condition: $$, ||

if(fatherName === 'Aronld' || season === 'rainy') {

}
else if (fatherName === 'arnold'){

}
else{

}

// 3. array declare
// index,
// length, push,
const numbers = [453,534,343,53,34,534,43];
numbers[0] = 54;

// 4. loops
//  for loop
 for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
 }

// while loop

let sum = 5;
while(sum < 10){
    sum++
}
console.log(sum);

// 5. function
function multiple(num1, num2) {
    const result = num1 + num2;
    // console.log(result);
    return result;
}

// multiple(45, 45);

const output = multiple(20,40);
console.log(output);

// 6. Object
//  3 ways to access property by name
const student = {
    name: 'Shakil Ahmad',
    age: 21,
    education: 'diploma in 5 semester'
}
console.log(student.name);
console.log(student['education']);