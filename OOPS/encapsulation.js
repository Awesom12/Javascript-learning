class Student {

    constructor() {
        let name, marks;
    }

    getName() {
        return this.name;  //getter
    }

    setName(name) {
        this.name = name; //setter
    }
    getMarks() {
        return this.marks;  //getter
    }

    setMarks(marks) {
        this.marks = marks; //setter
    }
}

let stu = new Student()
stu.setName("Fluffy")
stu.setMarks(100)

console.log(stu.getName(), stu.getMarks())