/*
    -the forEach() method executes a provided function once for each element in an array
    -the forEach() method does the dsame thing as a for loop or for of loop - both iterate over properties in an array
*/


//for loop example
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (let i = 0; i < food.length; i++ ){
console.log(food[i])
}

// forEach() method
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach(foodItem => console.log(foodItem)); //1

food.forEach(individualFoodItem => { //2
    console.log(individualFoodItem);
})

food.forEach(function(foodItem){ //3
    console.log(foodItem)
})

//challenge

let movie = ['Ice Age 1', 'Ice Age 2', "Ice Age 3"];

movie.push('Ice Age 4');
movie.splice(0, 1, 'Ice Age');
movie.forEach(movieTitle => console.log(movieTitle));




