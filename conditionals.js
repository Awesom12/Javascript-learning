const prompt = require('prompt-sync')()

let x = 4, y = 5;

if (y > x) {
    console.log("y is greater than x!")
}

if (x > y) {
    console.log("x is greater than y!")     //this block will not be executed as it is not true.
} else {
    console.log("Nope, x is NOT greater than y.")
}

//A program to determine whether it is time to get up

let hour = prompt("what time is it? ");

if (hour < 4) {
    console.log("It's the middle of the night - keep sleeping");
} else if (hour > 4 && hour < 7) {
    console.log("You can sleep a little longer.")
} else {
    console.log("why are you still sleeping get up")
}