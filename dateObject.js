let d = new Date()

//console.log(d);

console.log(d.getDate())  //day between 1 - 31

console.log(d.getMonth() + 1) //Month between 0 - 11, if it is Jan it prints '0', so add '1'

console.log(d.getFullYear())

console.log((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear())

console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());