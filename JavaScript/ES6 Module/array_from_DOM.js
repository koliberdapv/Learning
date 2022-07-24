// Array.from and Array.of - not on the prototype
// Array.from returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string, nodeList, Set

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

// console.log(p);
let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');
result.innerHTML = newText;

const text = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');
second.innerHTML = text;
console.log(text);
// <span>john</span> <span>peter</span> <span>susan</span>
