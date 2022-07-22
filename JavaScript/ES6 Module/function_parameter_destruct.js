// destructuing function parameters

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

function printPerson({ first, last, city }) {
  //   const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(bob);
