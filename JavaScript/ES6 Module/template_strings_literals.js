// Template Literals

// const person = {
//   name: 'kyle',
//   job: 'developer',
//   hobbies: ['surfing', 'baking', 'bowling'],
// };

// const result = document.getElementById('result');

// result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>';

// result.innerHTML = `<h2>${person.name}</h2> <p>${person.job}</p>
// <ul>${person.hobbies
//   .map((item) => {
//     return `<li>${item}</li>`;
//   })
//   .join('')}</ul>
// `;

// Tagged tepmlate literals

const author = 'some author';
const statement = 'some statement';

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;
// console.log(quote);

const result = document.getElementById('result');
result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ''}</strong>`;
  });
  return awesomeText.join('');
}
