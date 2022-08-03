// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.keys() - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

const keys = Object.keys(person);
console.log(keys);
// (3) ['name', 'age', 'status']

const values = Object.values(person);
console.log(values);
// (3) ['john', 25, 'student']

const result = Object.entries(person);
console.log(result);
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'john']
// 1: (2) ['age', 25]
// 2: (2) ['status', 'student']
// length: 3

// map method
const newResult = result.map((item) => {
  const [first, second] = item;
  return first;
});

console.log(newResult);

// for of
for (const [first, second] of result) {
  console.log(first, second);
}
