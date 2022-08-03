// Array includes() - checks if the item is an array
// useful in the conditional statements
// boolean
// the value should be the same (full name)

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'milk';
const isIncluded = groceries.includes(randomItem);
console.log(isIncluded);
// false
// as a second parameter you can pass the index

if (groceries.includes(randomItem)) {
  console.log(`yes`);
} else {
  console.log('no');
}
