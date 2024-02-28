// const colors = require('colors')  //JS way of importing
import colors from 'colors'//ES6 way

class Dog {
    constructor() { }

    woof() {
        console.log("Woof!".red)
        console.log("Woof!".magenta)
        console.log("Woof!".cyan)
    }
}

export default Dog