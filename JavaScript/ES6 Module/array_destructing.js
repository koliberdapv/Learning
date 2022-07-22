// destructing
// faster/easier way to access/unpack values from arrays
// object into variables
// arrays

// old way accessing variables
const fruits = ['orange', 'banana', 'lemon'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// new way
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const [enemy, peter, bob, , kelly, susan] = friends;
console.log(enemy, peter, bob, kelly, susan);

// we cannot access more variables than there is items in array - we will receive 'undefined'
// the names of the variables can be different from the names in the array
// the indext of the variable corresponds with the index in array
// if we want to skip an array item, we should not declare the variable, but leave an empty ',' instead
