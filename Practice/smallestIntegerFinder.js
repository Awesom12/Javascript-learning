/* class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallestNumber;

        for (let i = 0; i < args.length; i++) {
            let arrayNumber = args[i]

            if (i === 0) {
                smallestNumber = arrayNumber
            }

            if (arrayNumber < smallestNumber) {
                smallestNumber = arrayNumber
            }
        }
        return smallestNumber
    }
}

/* class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(null, args);
        //Tip: Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
    }
} */
/*let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8])) */

//To find Max, min values in an array

let arr = [12, 58, 2, 89, 93, 5, 17]

let maxVal = Math.max.apply(null, arr)

console.log(Math.min.apply(null, arr))//2
console.log(maxVal)//93

//Find 2nd largest value in the above array

let maxValIndex = arr.indexOf(maxVal)

console.log(maxValIndex)//4

let arr2 = arr.splice(maxValIndex, 1)
console.log(arr)
console.log(Math.max.apply(null, arr))//89