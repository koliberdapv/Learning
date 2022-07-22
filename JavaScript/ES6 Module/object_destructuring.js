// Object destructuring

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const {
  first: firstName1,
  last,
  city,
  siblings: { sister },
  zip,
} = bob;
console.log(firstName1, last, city, sister, zip);

// the name of the variable should correspond with the name of the property (city == city)
// however, we can reassign the property to another variable name using ':' (first: firstName1)
