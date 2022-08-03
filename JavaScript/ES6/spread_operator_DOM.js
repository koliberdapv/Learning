// spread operator

const headings = document.querySelectorAll('h1');
const result = document.getElementById('result');

console.log(headings);

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ');
console.log(text);
result.innerHTML = text;
