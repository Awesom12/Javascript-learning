//Creating a variable, function or an object that has more than one form
//In the example below we have draw method with 3 different forms

//Polymorphism is nothing method over-riding

class Shape {

    draw() {
        return ("I'm a generic shape")
    }
}

class Square extends Shape {

    draw() {
        return ("I'm a Square")
    }
}

class Circle extends Shape {

    draw() {
        return ("I'm a Circle")
    }
}

let s = new Shape()
console.log(s.draw())

let sq = new Square()
console.log(sq.draw())

let c = new Circle()
console.log(c.draw())