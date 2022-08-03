// global name space / hard to navigate
// named export - as many objects as you want
// default export - only one

import { random, people } from './data.js'; // named
import showPeople from './showpeople.js'; // default
import get from './getElement.js'; // default

const container = get('.container');
const button = get('.btn');
// const container1 = get('.container1');
// you did not select element

button.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
