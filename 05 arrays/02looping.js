let cars = ['BMW', 'Lambogini', 'Sienta', 'Toyota'];

// normal basic loop
for (let car of cars) {
    console.log(car);
}

// higher order foreach loop
cars.forEach(car => {
    console.log(car);
});

cars.forEach((car, index) => {
    console.log(index, car);
});

cars.forEach(function(car, index) {
    console.log(index, car);
});