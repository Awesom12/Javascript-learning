//Split the string such that each splitted string should have only 2 chars in total


function solution(str) {

    let splitString = [];

    for (let i = 0; i < str.length; i += 2) {
        splitString.push(str.slice(i, i + 2))
    }
    console.log(splitString)
}

solution("abcdef")