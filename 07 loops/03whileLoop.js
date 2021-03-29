// while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)

// break 
let number = 1;
while (number < 50) {
    if (number % 3 === 0) {
        break;
    } else {
        console.log(number);
        number++;
    }

}

// continue
number = 1;
while (number < 50) {
    if (number % 3 === 0) {
        number++;
        continue;
    } else {
        console.log(number);
        number++;
    }
}