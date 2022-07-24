// Array.from and Array.of - not on the prototype
// Array.from returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy));
// (5) ['u', 'd', 'e', 'm', 'y']

function countTotal() {
  //   console.log(arguments);
  let total = Array.from(arguments).reduce((acc, curr) => (acc += curr), 0);
  console.log(total);
}
countTotal(67, 89, 54);
// 210

// arguments = a key word
