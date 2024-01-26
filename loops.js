//This is a for loop

//3 parts - create a counter variable, set the condition, increment or decrement the counter

for (x = 1; x < 5; x++) {
    console.log("x is " + x);
}

let y = "foo";

for (x = 1; x < 5; x++) {
    y = y + "bar";
    console.log(y);
}

let text = "";

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + " ";   //text = text + previous text
}

console.log(text);