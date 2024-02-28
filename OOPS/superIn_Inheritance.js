//With Inheritance - we can use the variables and methods from the parent class in the child class.  - Reusability
//We can change the implementation of the parent class' methods in the child class - method overriding
//We can avoid the redundancy => recreating of variables and methods of the parent class can be avoided

class Animal {
    constructor(age) {
        this.age = age;  //Here name is method variable and this.name is Class Variable
    }

    printName() {
        console.log(this.age)
    }
}

class Dog extends Animal {
    constructor(age, height) {
        super(age); //super() calls the parent class'es constructor
        this.height = height
    }
    length() {
        console.log("The dog is of " + this.height + " inches")
    }
    display() {
        this.printName() //using 'this' keyword we can call the printName() method 
        this.length()
    }
}

let dObj = new Dog(4, 15);
dObj.display()