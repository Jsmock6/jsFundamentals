/*
    - great for counting key value pairs in an object. properties in an object are what is called enumerable
        -for in loops will itterate over an objects enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}
// console.log(student.degree) dot notation


for(let item in student) {
   // console.log(item)
    console.log(student [item]) // object bracket notation
}

let dogArray = ['great dane', 'husky', 'border collie', 'dalmation', 'pug'];
for (let dog in dogArray) {
    //console.log(dog)
    console.log(dogArray[dog]) // bracket notation
}


//Challenge


let name = 'jAMES'
let capName;

for(let i in name) {
    if (i == 0){
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }

}
console.log(capName);