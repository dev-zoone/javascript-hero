function explainCallback(name, age, task) {
    console.log("Hello Mr:", name);
    console.log("Your age", age);
    task();
    // washHand(task);
    // washHand();
}

function washHand() {
    console.log("wash hand with soap");
}

function takeShower() {
    console.log("Take shawer")
}

explainCallback('Been', 18, washHand);
explainCallback("Abul", 20, takeShower);