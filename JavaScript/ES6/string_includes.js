// string includes() - check if a string contains another string

const firstName = 'john';
const result = firstName.includes('jo');
console.log(result);
// true
// also takes positional parameter (second)

const product = {
  title: 'Leather Chair',
};
const result2 = product.title.includes('Le');
console.log(result2);

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'a';
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);
console.log(filteredProducts);
// (3) [{…}, {…}, {…}]
// 0: {title: 'Bar Stool'}
// 1: {title: 'Armchair'}
// 2: {title: 'Leather Chair'}
// length: 3
// [[Prototype]]: Array(0)
