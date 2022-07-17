// var, let, const
// define, update, redifine
// const cannot mutate primitive type

// define
var number = 100;
console.log(number);

// update
number = 200;
console.log(number);

// redifine
var number = 'orange';
console.log(number);

// define
let amount = 100;
console.log(amount);

//update
amount = 200;
console.log(amount);

// redifine - not allowed
// let amount = 'orange';
console.log(amount);

const total = 100;
console.log(total);

// update - not allowed
// total = 200;

// we can reassign the referrence value
const person = { name: 'bob' };
person.name = 'john';
console.log(person.name);
