// closure
// closure gives you access to an outer function's scope from an inner function
//closure makes private variables with closure

function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`hello there, the secret is: ${privateVar}`);
  }
  return inner;
  // inner();
}
outer()();

const value = outer();
console.log(value);
value();
