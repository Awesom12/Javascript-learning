//JS typically reads and executes the code line by line(in synchronous fashion)
//Sync Code
/*function print(string) {
    console.log(string)
}

print("Apple")
print("Basket")
print("cupboard") */

//Async Code
/* function print(string) {
    setTimeout(() => {
        console.log(string)
    }, Math.floor(Math.random() * 100))    //setTimeout takes two parameters: 1. function 2. Timeout value in milliseconds
}

print("Apple")
print("Basket")
print("Cupboard") */

//This function doesn't produce the same output(ie., Apple Basket Cupboard ) as the above function,
//the order of the output will be different each time it is executed.
//for e.g, if - print("Apple") is a setup function which needs to be run first and print("Basket") is a main function and
//print("Cupboard") is a tear down fuction which always need be run at the last, we need to use either Callbacks or Promises or Async-Await

//callback - The earliest and staight forward solution
// function print(string, callback) {  //A parameter 'callback' is added to our function. callback is also a function
//     setTimeout(() => {
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random() * 100))
// }

// print("Apple", () => {
//     print("Basket", () => {   //We have passed the function that needs to be executed next, as an argument to the previous function
//         print("Cupboard", () => { })  //The function that is passed as an argument to other function is a callback function.
//     })
// })

/* PROBLEM WITH CALLBACKS: When the chain of callbacks increase(here we have 3 levels if it increases to 5 or 10)
It gets messy really fast and leads to CALLBACK HELL problem
ie., the code gets really difficult to read and maintain */

//So inorder to deal with CALLBACK HELL problem PROMISES were introduced.

//With PROMISES the code gets easier to read and faster to run, instead of calling the callback function we are now 
//returning the promise
//A Promise can have one of 3 states - 
//1. Pending (the function hasn't completed its execution yet) 2. Resolve(successful) 3. Reject (when there is an error)

// function print(string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(string)
//             resolve()
//         }, Math.floor(Math.random() * 100))
//     })
// }

// print("Apple")  //After this gets executed successfully then 
//     .then(() => print("Basket")) //this function gets invoked. If it gets executed successfully, the following one gets invoked and executed
//     .then(() => print("Cupboard"))

//So, PROMISES help us writing better, much cleaner code

//ASYNC-AWAIT
function print(string) {  //This print function is exactly same as with promise but only the way we call has changed
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100))
    })
}
async function printAll() { //All 3 print functions are wrapped in 'printAll' function which is prepended with 'async' keyword
    await print("Apple")  //The called methods have 'await' pepended to them.
    await print("Basket")
    await print("Cupboard")
}
printAll()

//This code is highly readable. This almost looks and feels like synchronous code.