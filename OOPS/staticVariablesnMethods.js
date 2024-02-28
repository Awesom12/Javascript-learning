/* From: https://www.youtube.com/watch?v=s5x1akKJRvg&list=PLUDwpEzHYYLvwue9lrn2f-khukGDl-Nuh&index=15
Why Static Varibles and Methods: 1. If a class has 3 objects, each object occupies some space in memory.
 But static variables and methods occupy the space only once
 2. If we change the value of any object variable it will not be reflected in all the other objects*/

class Vnm {

    static x = 5  //x is a static variable
    y = 10  //y is a non-static variable


    static m1() {
        console.log("This is m1 - static method")
    }

    m2() {
        console.log("This is NON-static method m2 ")
    }

}
//We can access static variables and methods using class name

console.log(Vnm.x)  //static variables doesn't need an object to call them
Vnm.m1() //static methods doesn't need an object to call them

Vnm.x = 55
console.log(Vnm.x);

let con1 = new Vnm()
console.log(con1.y) //NON-static VARIABLES AND METHODS need an object to call them
con1.m2()

con1.y = 150  //The value of variable y is changed here
console.log(con1.y)

let con2 = new Vnm()
console.log(con2.y) //Here the value of y is 10, not the changed value ie., 150