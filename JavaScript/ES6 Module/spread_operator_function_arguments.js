// spread operator - function arguments

const numbers = [23, 54, 6, 22, 88, 2345];

console.log(Math.max(...numbers));

const sayHello = (name, lastName) => {
  console.log(`hello ${name} ${lastName}`);
};
const person = ['john', 'sanders'];

sayHello(...person);
