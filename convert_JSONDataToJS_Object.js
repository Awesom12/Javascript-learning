//JSON example: person = {"firstName":"John", "lastName":"Doe", "age":46}
//Object example: person = {firstName:"John", lastName:"Doe", age:46,}

let text = '{"employees": [' +   //Here each line of JSON is surrounded with single quotes.
    '{ "firstName": "John","lastName": "Doe" },' +
    '{ "firstName": "Anna","lastName": "Smith" },' +
    '{ "firstName": "David","lastName": "Jones" }, ]}'

let obj = JSON.parse(text)
console.log(obj.employees[1])

