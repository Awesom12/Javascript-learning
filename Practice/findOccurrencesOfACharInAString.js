let count = 0;

// function occurances(str, search) {

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == search) {
//             count++
//         }
//     }

//     return count;
// }

// console.log(occurances("hello world", 'l'));

let str = "howhowhow"
let search = 'h'

for (let i = 0; i < str.length; i++) {
    if (str[i] == search) {
        count++
    }
}

console.log(count);