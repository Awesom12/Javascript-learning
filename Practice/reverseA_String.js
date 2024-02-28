//Reverse a given String

let str = "Turquoise"

//convert string to an array, reverse that array and convert that reversed array back to String
// let text = str.split("");  //String is converted to an array
// console.log(text);

// console.log(text.reverse()); //Array is reversed

// console.log(text.join(""))  //Array is converted back to String

let rev = "";
for (let x = str.length - 1; x >= 0; x--) {
    //rev += str[x] //or
    rev += str.charAt[x]
}
console.log(rev);