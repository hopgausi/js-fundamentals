const person = {
        name: 'Jane Johnson',
        age: 23,
        address: {
            city: 'Mzuzu',
            area: 'Chiwabvi'
        },
        contacts: {
            email: 'jane@test.com',
            phone: '992342743'
        }
    }
    // display the object
console.log(JSON.stringify(person));

// display values
console.log(Object.values(person));

// display keys
console.log(Object.keys(person));

// accessing individual object attributes values
console.log(person.address);
console.log(person.contacts);
console.log(person.name);
console.log(person.address.city);
console.log(person.contacts.phone);