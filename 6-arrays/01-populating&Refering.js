/*
    - arrays are containers that hold a list of items
    - denoted by []
    - they can hold multiple datatypes
    - each item, regaurdless of datatype, is seperated by a comma
*/

let list = ['orange', 'banana', 'apple'];
console.log(list[1]);

/*
    - when calling an arry, we can append square brackets onto the end of our array with the index number we want to reference. This is called square bracket notation
    - javascript starts counting at 0 
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Tayor', 'Will']]

// console.log(typeof students);
console.log(students instanceof Array); // instanceof operator is used to check the type of a variable we're working with
console.log(students[2]);

//Challenge

//mine
let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']]
console.log('Hello ' + students[6][2] + '!') 

//example
let name = students[6][2];
console.log(`Hello ${name}!` )
