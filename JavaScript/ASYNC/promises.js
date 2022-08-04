// callbacks, promises, async/await
// Promises - pending, resolved, rejected
// then catch - pass another callback

function get(className) {
  const element = document.querySelector(className);
  if (element) {
    return element;
  } else {
    console.log(`there is no element for ${className}`);
  }
}

const heading1 = get('.one');
const heading2 = get('.two');
const heading3 = get('.three');
const btn = get('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (!value) {
    resolve('hey, the value is true');
  } else {
    reject(`there was an error, the value is ${value}`);
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
