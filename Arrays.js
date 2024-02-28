let fruits = ["Melon", "Grapes", "Plums", "Oranges", "Dates"];

// console.log(fruits);
// console.log(fruits[0]);  //Melon
// console.log(fruits[2]);  //Plums

// console.log(fruits.length); //5

//Push always places the element to the last of the array
fruits.push("Apricot"); // [ 'Melon', 'Grapes', 'Plums', 'Oranges', 'Dates', 'Apricot' ]
console.log(fruits);

// fruits.pop("Grapes"); //This one doesn't work
// console.log(fruits);

fruits.pop(); //[ 'Melon', 'Grapes', 'Plums', 'Oranges', 'Dates'] Deletes the 'Apricot' at the end of the array
console.log(fruits);

fruits.shift();  //Deletes the 'Melon' at the start of the array
console.log(fruits);

fruits.unshift('Avocado'); //Adds 'Avocado' at the start of the array
console.log(fruits);

/* The slice() method creates a new array.
The slice() method does not remove any elements from the source array. */

let newFruits = fruits.slice(1);//[ 'Grapes', 'Plums', 'Oranges', 'Dates' ]. newFruits array doesn't have 'Avocado'
console.log(newFruits);

newFruits = fruits.slice(2); //['Plums', 'Oranges', 'Dates' ]. 2 elements are deleted from fruits array and newFruits array doesn't have 'Avocado' and 'Grapes'
console.log(newFruits);

/* The slice() method can take two arguments like slice(1, 3)
The method then selects elements from the start argument, and up to (but not including) the end argument. */

newFruits = fruits.slice(1, 3); //[ 'Grapes', 'Plums' ]
console.log(newFruits);

fruits.splice(2, 0, 'Apricot'); //splice allows to insert the element at an mentioned index number
console.log(fruits); //[ 'Avocado', 'Grapes', 'Apricot', 'Plums', 'Oranges', 'Dates' ]. 'Apricot' is inserted at index 2.

/** splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted. */

fruits.splice(2, 1, "Lemon");
console.log(fruits);  //[ 'Avocado', 'Grapes', 'Lemon', 'Plums', 'Oranges', 'Dates' ]

fruits.splice(3, 2, "Kiwi", "Papaya");
console.log(fruits); //[ 'Avocado', 'Grapes', 'Lemon', 'Kiwi', 'Papaya', 'Dates' ]

// let text = "";
// for (let x of fruits) {
//     text += " " + x;
// }
// console.log(text)

//Array of objects
let cats = [
    {
        name: 'Fluffy',
        age: 2
    },
    {
        name: 'Whiskers',
        age: 10
    },
    {
        name: 'Munchkin',
        age: 5
    }
]
//console.log(cats);
// console.log(cats[1]);
// console.log(cats[0].age);


// cats.forEach(cat => {
//     for (let value in cat) {
//         console.log(`${cat[value]}`)
//         // console.table(`${cat[value]}`)
//     }
// })