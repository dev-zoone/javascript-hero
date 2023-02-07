// First Problem
function mindGame(number) {
    const multiNum = number * 3;
    const addNum = multiNum + 10;
    const devidMinus = (addNum / 2) - 5;
    return devidMinus;
}
console.log(mindGame(5));

// Second Problem
function evenOdd(name) {
    const count = name.length;
    if(count %2 == 0 && count %2 != 1) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
evenOdd('Shakil Ahmad');

// Third Problem
function isLGSeven(number) {
    const minuse = number - 7;
    if(minuse < 7) {
        console.log(minuse);
    }
    else if(minuse >= 7) {
        console.log(minuse * 2);
    }
}
isLGSeven(14);

// Fourth Problem
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
function gemsToDiamond(friend1, friend2, friend3) {
    const firstGems = friend1 * 21;
    const secondGems = friend2 * 33;
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
