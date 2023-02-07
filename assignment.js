// First Problem
function mindGame(num) {
    let intoo = num * 3;
    let pluse = intoo + 10;
    let dividedMinuse = (pluse / 2) - 5;
    return dividedMinuse;
}
console.log(mindGame(5));

// Second Problem
function evenOdd(name) {
    let count = name.length;
    if(count %2 == 0 && count %2 != 1) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}
evenOdd('shakil ahmad');

// Third Problem
function isLGSeven(num) {
    let minuse = num - 7;
    if(minuse < 7) {
        console.log(minuse);
    }
    else if(minuse >= 7) {
        console.log(minuse * 2);
    }
}
isLGSeven(14);

// Fourth Problem
function findingBadData() {

}

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