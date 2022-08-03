// Arrow Functions or Fat Arrow Functions
// no name, always expressions, assign to a variable
// no function keyword
// 'this'

const sayHi = () => console.log(`Hello`);
sayHi();

// one-liners have implicit return - meaning that you do not have to add return at the end for the function to work
const double = (value) => value * 2;
const num = double(4);
console.log(num);

// two parameters and more than one line
// if you have more than one line of code, you need to explicitly add return statement
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
const sum = multiply(4, 6);
console.log(sum);

// if we return an object - add parentheses before curly brackets
const object = () => ({ name: 'john', age: 25 });
const person = object();
console.log(person);

// arrow functions as a callback function
const numbers = [1, 2, 3, 4, 5, 6];
// const big = numbers.filter((number) => number > 2);
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log(big);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('you have pressed the button'));
