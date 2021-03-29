// To make module imports(ES6) work, use the .mjs extension instead of .js OR
// type="module" in html script


// import everything from maths.mjs as Arithmetic[Named import]
import * as Arithmetic from './maths.mjs'
// OR
// import respective function from maths.mjs [Named import]
import { add, remainder, divide } from './maths.mjs'

// import Person form Person[Default import]
import Person from './Person.mjs'


// Named import 1 option
console.log(Arithmetic.add(10, 10));
console.log(Arithmetic.remainder(39, 9));

//  Named import 2 option
console.log(add(10, 10));
console.log(remainder(39, 9));
console.log(divide(25, 5));

// Default import 
let person1 = new Person();
console.log(person1.getType());