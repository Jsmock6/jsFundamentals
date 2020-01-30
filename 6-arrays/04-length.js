let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length) // simply counts how many items are present, does not start counting at 0

let arr = ['blue', 25, true, ['string'], {key: 'value'}];
//console.log(arr.length);
console.log(arr.toString());


//challenge

let arr = [1, 2, 3, 4, 5];
//console.log(arr instanceof Array);
if(arr instanceof Array === true){

let arrTwo = arr.reverse();
console.log('array two', arrTwo);
}