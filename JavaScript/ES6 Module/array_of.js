// Array.from and Array.of - not on the prototype
// Array.of creates a new Array instance from a variable number of arguments

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// // undefined
// console.log(example.of);
// // undefined

const friends = Array.of('john', 23, true);
console.log(friends);
