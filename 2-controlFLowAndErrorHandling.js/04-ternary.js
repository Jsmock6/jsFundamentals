/*
    -a ternary is a shortcut, or shorthand way of writing an if/else statement
    -requires the default or catch all (else)
*/

let num = 6;

//ternary
(num > 0) ? console.log('yes') : console.log('no');


//if/else
if (num > 0) {
    console.log('yes')
} else {
    console.log('no');
}


let num = 6;

//ternary
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working')


//else/if

if (num == 0) {
    console.log('working');
} else if (num < 0){
    console.log('not working')
} else {
    console.log('still not working')
}

//CHALLENGE

let age = 23;

(age >= 25) ? console.log("yay! you can rent a car!") 
: (age >= 21) ? console.log("yay! you can drink") 
: (age >= 18) ? console.log("yay! you can vote!") 
: console.log("sorry, youre too young to do anything fun.")