// First Problem
// This is a mind game function that returns a number by multiplying, dividing, adding, subtracting

function mindGame(number) {
    if (typeof (number) !== 'number') {
        throw new Error("Must be Number")
    }

    const multiNum = number * 3;
    const addNum = multiNum + 10;
    const devidMinus = (addNum / 2) - 5;
    return devidMinus;
}
console.log(mindGame(5));

// Second Problem
// This is an even and odd function that returns the length of a string as even and odd.

function evenOdd(name) {
    if (typeof (name) !== 'string') {
        throw new Error("Must be String")
    }
    const count = name.length;
    if(count %2 == 0 && count %2 != 1) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}
evenOdd('Shakil Ahmad');

// Third Problem
// This is a function that assigns a number to 7 and returns a condition that is less than 7, and if the value is greater than 7, it is returned divided by 2.

function isLGSeven(number) {
    if (typeof (number) !== 'number') {
        throw new Error("Must be Number")
    }

    const minus = number - 7;
    if(minus < 7) {
        console.log(minus);
    }
    else if(minus >= 7) {
        console.log(minus * 2);
    }
}
isLGSeven(14);

// Fourth Problem
// This is a function that returns some negative data in the array

function findingBadData(numbers) {

    let negative = [];
    let positive = 0;
    
    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            negative.push(numbers[i]);
        }
        else{
            positive += numbers[i];
        }
    }
    return negative;
}
console.log(findingBadData([1,3,5,-2,-5,-8,-54,-23,-5]));

// Fifth Problem
// This is a function that converts some gem number to diamond and returns it

function gemsToDiamond(friend1, friend2, friend3) {

    const firstGems = friend1 * 21;
    const secondGems = friend2 * 32;
    const thirdGems = friend3 * 43;

    const totalGems = firstGems + secondGems + thirdGems;

    if(totalGems < 2000) {
        console.log(totalGems);
    }
    else if(totalGems >= 2000) {
        console.log(totalGems - 2000);
    }
}
gemsToDiamond(50, 50, 50);


