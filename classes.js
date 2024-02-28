class Cat {  //Every class needs a keyword 'class' and we need to use curly braces.

    constructor(name, age) {  //Constructor is used only for initializing the data, we cannot perform any operations like addition, sub etc.,
        this.name = name   //'this' keyword makes the variables in the constructor as CLASS VARIABLES
        this.age = age
    }

    // catInfo() {
    //     color = orange;   //the variables color and height are LOCAL VARIABLES of the method "catInfo"
    //     height = 12;
    // }

    meow() {
        console.log("Meow!")
    }

    scratch(numberOfTimes) {
        for (let x = 1; x <= numberOfTimes; x++) {
            console.log('Scratch!')
        }
    }

}

let myFirstCat = new Cat("Fluffy", 4)
console.log(myFirstCat)
console.log(myFirstCat.name)
myFirstCat.meow()
myFirstCat.scratch(4)

let mySecondCat = new Cat("Bella", 5)
console.log(mySecondCat.age)
mySecondCat.meow()