/* let numbers = [1, 2, 5, 6, 5, 2, 8, 5]

// for(i = 0; i<numbers.length; i++){
// console.log(numbers.indexOf(numbers[i]))
// }
//The indexOf() method returns the first index (position) of a specified value.
//In the above example 5 is found at 3 places. Every time 'indexOf()' method returns 2. which is the first index of 5.

let duparr = numbers.filter(function(ele,index,arr){   //function(ele,index,arr) is the call back function
 //Here 'ele' is each element in numbers array, 'index' is position of each element in the array, 'arr' is the numbers array

    return arr.indexOf(ele)!=index
})

console.log(duparr); */

//A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

//Returns the elements of an array that meet the condition specified in a callback function.



// function isEven(value) {
//     return value % 2 == 0;
// }


// console.log(isEven)
/* 
let check_duplicate_in_array = (input_array) => {
    let duplicate_elements = [];
    for (element of input_array) {
        if (input_array.indexOf(element)   //The indexOf() method returns the first index (position) of a specified value.
            //If the item is present more than once, it returns the position of the first occurrence.
            !== input_array.lastIndexOf(element)) { //Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
            duplicate_elements.push(element);
        }
    }
    //If we add equal elements to a set, only the first one will be saved.
    //return new Set(duplicate_elements) // output: Set(3) { 1, 2, 3 }
    //The Array.from() method returns an Array object from any object with a length property or any iterable object.
    return Array.from(new Set(duplicate_elements));

};
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr)); */

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
let dupEleArray = []
for (element of arr) {
    if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
        dupEleArray.push(element)
    }
}
console.log(Array.from(new Set(dupEleArray)))




// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
// console.log(arr.indexOf(1))
// console.log(arr.lastIndexOf(1))

// console.log(arr.indexOf(2))
// console.log(arr.lastIndexOf(2))