//Array
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['John', 'Jane', 'Mike'];
const mixed: (number | string)[] = [1, 'two', 3, 'four'];

console.log(numbers[0]); // Output: 1
console.log(names.length); // Output: 3

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

names.splice(1, 1);
console.log(names); // Output: ['John', 'Mike']
//Tuple
let person: [string, number, boolean];
person = ['John', 25, true];

console.log(person[0]); // Output: 'John'
console.log(person.length); // Output: 3

person[1] = 30;
console.log(person); // Output: ['John', 30, true]