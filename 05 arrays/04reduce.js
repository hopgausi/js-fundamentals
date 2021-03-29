// .reduce() return a single value--reduces all value into one
let numbers = [1, 2, , 3, 4, 5, 6, 7, 8, 9];

// normal function - takes current value and accumulated value of previous values
let sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
})
console.log(sum);

// arrow function - takes current value and accumulated value of previous values
let product = numbers.reduce((accumulator, current) => accumulator * current);
console.log(product);