// for in loop - iterates over an object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use for of loop instead

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

for (const propertyName in person) {
  console.log(`${propertyName}`);
  console.log(`${person[propertyName]}`);
}
