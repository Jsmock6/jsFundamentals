let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
console.log('original array', food);


food.push('Pizza'); // appends of 'pushes' an item into the array. appends to the end
console.log('Push:', food);

food.splice(1, 1, 'Bananas'); // (position, how many to delete, what to add in its place)
console.log('splice', food);

food.splice(2, 0, 'Sweet Potato Pie'); //(position, how many to delete (0), what to add in its place)
console.log('splice 2', food);

food.pop(); // removes the last item of an array
console.log('pop', food);

food.shift(); // removes the first item of an array
console.log('shift', food);

food.unshift('Popcorn', 'Steak'); // unshift adds one or more items to the beginning of the array
console.log('unshift', food)

console.log('original array', food)