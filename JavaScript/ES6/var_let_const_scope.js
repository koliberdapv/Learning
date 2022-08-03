// var, let, const
// let, conts - blocked scoped {} - anything within {}
// var - function scoped

// global scope
var amount = 100;

function greet() {
  // local scope
  var random = 'random value';
  // works for var, let, and const
  console.log(`hello there ${random}`);
}
// greet();
// console.log(random);

// // if we set up a global 'var' variable, we will be able to change it within the local scope

// var total = 1000;
// var test = true;

// if (test) {
//   var total = 'oranges';
//   console.log(`hello there`);
// }
// console.log(total);

// // if we set up a global 'let' variable, we will not be able to change it within the local scope

let total = 1000;
let test = true;

if (test) {
  // local scope
  let total = 'oranges';
  let value = 'some random value';
  console.log(`hello there`);
}
console.log(total);

// the variables within the local scope cannot be accessed from global scope.
// this way, we should not worry about the variable naming (works for let and const)

// cant access the local variable - not defined
// console.log(value);

{
  const total = 1001;
  console.log(total);
}
{
  const total = 1002;
  console.log(total);
}
