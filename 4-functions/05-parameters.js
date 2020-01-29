function hi(name) {
    console.log(`Hello, ${name}`);
}

hi('James'); 

//example
function james(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

james('sandwich');

//example
function counter(number) {
    for(number; number <= 10; number++) {
        console.log(number)
    }
}
counter(0);




function counter(number, string) {
    for(let i =0; i <= number; i++) {
        console.log(i)
    }
    console.log(string);
}
counter(10,'hello');



//challenge

//my idea
function name(firstName,lastName) {
    console.log(`Hello, my name is ${firstName} ${lastName}.`);
    }
name('James', 'Smock')

//his example
function name(firstName,lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}`)

}
name('James', 'Smock')

