// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value) - boolean
// clear() - removes all items
// has(value) - boolean

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();
const random = 'third';

unique.add('first');
unique.add('second');
unique.add('third');
unique.add(random);
unique.add(4);

const result = unique.delete('third');
console.log(result);
// true

const isValue = unique.has(4);
console.log(isValue);
// true

console.log(unique);
