//METHOD OVERRIDING IN INHERITANCE , METHOD OVERRIDING IS POSSIBLE ONLY WITH INHERITANCE
//wITH OVERRIDING, THE DEFINITION OF THE METHODS IN THE INHERITED CLASS WILL BE THE SAME BUT ITS IMPLEMENTATION WILL BE CHANGED.

class Bank {
    ROI() {  //Rate of Interest
        return 0
    }
}

class BOA extends Bank {
    ROI() {
        return 8   //implementation changed. Method over-riding
    }
}

class Chase extends Bank {
    ROI() {
        return 9 //method over-riding
    }
}

chase = new Chase()
console.log(chase.ROI())

boa = new BOA()
console.log(boa.ROI())