// hoisting
// function and var declarations are hoisted
// safer to access only after initiated
display();
console.log(display);
// console.log(firstName);
// console.log(lastName);
console.log(random);

const firstName = 'john';
let lastName = 'jordan';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}

moreComplex();
