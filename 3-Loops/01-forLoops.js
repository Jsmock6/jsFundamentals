/*

for loops take in 3 parameters:
1. initial expression
2. condition
3. increment expression

*/

//     (1)       (2)       (3)
for (let i = 0; i < 10; i = i + 1) { // i++) shorthand
    console.log(i);
}


// Challenge: using a for loop, count to 20 by 2's starting at 0

for (let i = 0; i <= 20; i = i + 2) { //i+=2 shorthand
    console.log(i)
}


//Challenge: using a for loop, count from 10 to 0, going down by 1

for (let i = 10; i >= 0; i = i - 1) {
    console.log(i)
}

//Challenge: using a for loop, count from 0, going down by 2s to -24

for (let i = 0; i >= -24; i = i - 2) {
    console.log(i)
}

//Challenge: using a for loop, go through and display each letter individually
let name = 'james'
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    
}

//Challenge: make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let num = 0;
for (let i = 1; i <= 50; i++) {
    num += i;
}
console.log(num)