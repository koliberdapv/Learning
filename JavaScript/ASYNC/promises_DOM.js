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

btn.addEventListener('click', () => {
  addColor(1000, heading1, 'red')
    .then(() => addColor(2000, heading2, 'green'))
    .then(() => addColor(1000, heading3, 'blue'))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}
