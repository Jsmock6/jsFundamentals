/*
    -a variable is a named container for storing data
    -we name variables so that we can refer to them again
*/

let a = 2; 

    let    b    =    1;
/*  (1)   (2)  (3)  (4)
    
    1.javscript keyword
    2. variable name
    3. = is assignment operator 
    4. value of variable 

*/
console.log(a + b);

let hello = 'test one'
let Hello = 'test two'
console.log(Hello)

/*
    notes on variables
    -a variable must begin with a letter, underscore, or a dollar sign
    -numbers may follow the above characters, but they can't come first
    -javascript is case sensative = hello vs Hello
    -no spaces allowed in variable names
    -camelCase is the best practice for naming variables with multiple words
        -this helps with readablilty 
*/    

/*
    var, let, const: 
        
        -var: 'old' keyword for variables in javascript
        
        -let: 'new' keyword introduced for varibles is ES6 (newest version of js)
        
        -const: unchangable variable once declared
*/

/*
    declaration vs initialization:
        -declarations are the LEFT SIDE of a variable
            -let x 
            -declarations are on the left side of the assignment operator (=)
        
        -initializations are the RIGHT SIDE of the variable
            -it sets the value of the variable
            -the value we initialize our variables as is what is on the right side of the s]assignment operator (=)

*/
let x;
console.log('Declaration', x); //declaration undefined

x = 10
console.log('Initialization:', x); //initialization: 10

x = 100
console.log('Reinitializatiion', x); // reinitialization as 100

let y = 'hello';
console.log(x,y)

const today = 'Great' 
console.log(today)

today = 'wonderful'
console.log(today) 
