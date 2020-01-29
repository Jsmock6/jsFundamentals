function hi() {
    console.log('hello');
}

//hi;
//hi();
//console.log(hi);
console.log(hi());

// as soon as our parser see's that there is a function invocation, that happens immediately

function num() {
    for (let i = 1; i < 11; i++){
    console.log(i) 
    }
}
num()

// Challenge
let arr = ['this', 'is', 'really', 'cool']; 
   
function arrList(){
    for(let word of arr){
         console.log(word);
        }
}
arrList()
