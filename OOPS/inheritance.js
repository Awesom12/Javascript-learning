class A {
    a = 100
    display() {
        console.log(this.a);
    }
}

class B extends A {
    b = 200
    show() {
        console.log(this.b);
    }
}

let Bobj = new B()  //creating the object of B and accessing the variables and methods from A
Bobj.display()
Bobj.show()