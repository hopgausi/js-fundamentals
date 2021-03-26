// applying forloop - EXAMPLE 1
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0 & i % 5 === 0) {
            console.log(i, ': Multiple of 3 and 5');
        } else if (i % 3 === 0) {
            console.log(i, ': Multiple of 3');
        } else {
            console.log(i, ': Multiple of 5');
        }
    } else {
        console.log(i);
    }
}


// EXAMPLE 2
arrayX = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i of arrayX) {
    console.log(i)
}

// EXAMPLE 3
for (let i = 0; i < arrayX.length; i++) {
    console.log(arrayX[i] + 100);
}