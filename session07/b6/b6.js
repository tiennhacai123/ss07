"use strict";
const numbers1 = [1, 2, 3, 4, 5];
const names1 = ['John', 'Jane', 'Mike'];
const mixed1 = [1, 'two', 3, 'four'];
console.log(numbers1[0]); // Output: 1
console.log(names1.length); // Output: 3
numbers1.push(6);
console.log(numbers1); // Output: [1, 2, 3, 4, 5, 6]
names1.splice(1, 1);
console.log(names1); // Output: ['John', 'Mike']
//Tuple
let person1;
person1 = ['John', 25, true];
console.log(person1[0]); // Output: 'John'
console.log(person1.length); // Output: 3
person1[1] = 30;
console.log(person1); // Output: ['John', 30, true]
