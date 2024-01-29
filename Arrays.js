let fruits = ["Melon", "Grapes", "Plums"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);

// console.log(fruits.length);

// fruits.push("Apricot"); //Push always places the element to the last of the array
// console.log(fruits);

// fruits.pop("Grapes");
// console.log(fruits);

// fruits.splice(0, 0, "Apricot"); //splice allows to insert the element at an mentioned index number
// console.log(fruits);

// fruits.splice(2, 0, "Dates");
// console.log(fruits);

// let text = "";
// for (let x of fruits) {
//     text += " " + x;
// }
// console.log(text)

//Array of objects
let cats = [
    {
        'name': "Fluffy",
        'age': 2
    },
    {
        'name': 'Whiskers',
        'age': 10
    },
    {
        'name': 'Munchkin',
        'age': 5
    }
]
// console.log(cats);
// console.log(cats[1]);
// console.log(cats[0].age);

cats.forEach(cat => {
    for (let value in cat) {
        console.log(`${cat[value]}`)
        // console.table(`${cat[value]}`)
    }
})