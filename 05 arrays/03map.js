//  .map() transforms array elements - returns an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// normal function
let squaredNumbers = numbers.map(function(number) {
    return number * number;
})
console.log(squaredNumbers);

// arrow function
let squaredNumbersX = numbers.map(number => number * number)
console.log(squaredNumbersX);