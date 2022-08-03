// default prameters, arrow function gotchas
// we can declare a default parameter, which will be used if there is no parameter entered
// however, once we pass the argument, the default parameter will not be taken (used)

const john = 'john';
const peter = 'peter';

function sayHi(person = 'susan') {
  console.log(`hello ${person}`);
}
const sayHello = (person = 'bob') => console.log(`hey ${person}`);

sayHi();
sayHello(peter);
