// (1)     (2) 
let hi = () => {
    console.log('hello');
}

/*
    1. all fat arrow functions need to be set to a variable
    2. the fat arrow is signifying that this is a function

    - arrow functions are the shorthand way of writing the function expression (not declaration)
        - fat arrow functions do not get hoisted since they are function expressions
*/

// CONCISE BODY

let hi = () => console.log('hello'); // return is implicit and happens by default
hi();

// BLOCK BODY
let hi = () => {
    console.log('hello');
    // return keyword must be present inside of a block body arrow function
}
hi();

// CONCISE vs BLOCK

let apples = num => console.log(`There are ${num} apples.`);
apples(10)


//example
let counting = num => {
    for(let i = 0; i <= num; i++){
    console.log(i);
    }
}
counting(20)


/*
    - if there are parameters, we have to have the parenthesis ()
    - if there is a single parameter you can choose to have parens or not to have them
    - if you have multiple parameters you have to have parens
*/