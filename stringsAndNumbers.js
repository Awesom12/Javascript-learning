let str = "Hello!"
console.log(str)

//As string is a predefined object in JS, str can also be initialized as follows:
// let str1 = new String("Welcome")
// console.log(str1)

//chatAt()
console.log(str.charAt(5))

//concat()
console.log(str.concat(" How are you doing today?"))

//replace()
str = "How are you doing today?"
console.log(str.replace("are you doing", "do you do"))

//substring()
str = "Hello!"
console.log(str.substring(1, 4))

//toLowerCase()
str = "HELLO"
console.log(str.toLowerCase())
//toUpperCase()
console.log(str.toUpperCase())

//split
str = "How are you doing today?"
let arr = console.log(str.split(" "));

//trim
str = "      How are you doing today?     "
console.log(str.trim())

//************NUMBERS****************//
let num = 100
//let num1 = new Number(100)

//numbers can be integers, decimals and exponentials
let num2 = 3.14
let num3 = 10e2 //nothing but 10 square

console.log(num, num2, num3)

//isInteger

let num1 = 56
num2 = 41.568 //we're re-assining num2 value, so no need of let here
num3 = "All Good"

console.log(Number.isInteger(num1)) //true
console.log(Number.isInteger(num2)) //false
console.log(Number.isInteger(num3)) //false

//parseInt() -> converts string to number
s = "56892"
console.log(typeof (s))
console.log(Number.parseInt(s))
console.log(typeof (Number.parseInt(s)))

//toString()
let n = 156.695
console.log(n.toString())
console.log(typeof (n.toString()))
