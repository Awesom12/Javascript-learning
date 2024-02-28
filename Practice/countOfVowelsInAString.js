//The input string  only consist of lower case letters and/or spaces

/* function getCount(str) {

    let vCount = 0
    let vArr = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vArr.length; j++) {
            if (str[i] == vArr[j]) {
                vCount++;
            }
        }
    }
    return vCount;
} */

//Another way of doing
function getCount(str) {

    let vCount = 0

    for (i in str) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vCount++;
        }
    }
    return vCount;
}

console.log(getCount("abracadabra"));
console.log(getCount("extravanza"));
console.log(getCount("lieutenant"));