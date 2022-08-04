// DOM
// callbacks, promises, async/await

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
  setTimeout(() => {
    heading1.style.color = 'red';
    setTimeout(() => {
      heading2.style.color = 'green';
      setTimeout(() => {
        heading3.style.color = 'blue';
      }, 1000);
    }, 1000);
  }, 1000);
});
console.log(`i'm second`);
