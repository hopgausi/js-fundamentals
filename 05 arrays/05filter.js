// .filter() returns array based on conditional
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// normal function
let evenNumbers = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log(evenNumbers);

// arrow function
let oddNumbers = numbers.filter(n => n % 2 !== 0);
console.log(oddNumbers);