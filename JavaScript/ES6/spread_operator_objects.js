// spread operator (objects)

const person = {
  name: 'john',
  job: 'developer',
};

let newPerson = { ...person, city: 'chicago' };
console.log(newPerson);
// {name: 'john', job: 'developer', city: 'chicago'}

// it is also possible to overwrite the existing properties
newPerson.name = 'paul';
console.log(newPerson);
// {name: 'paul', job: 'developer', city: 'chicago'}
