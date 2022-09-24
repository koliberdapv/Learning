const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

const numbers = get('.numbers');
const containers = document.querySelectorAll('.container');
const btn = get('.btn');
const info = get('.info');

const removeActive = () => {
  containers.forEach((item) => {
    item.classList.remove('active');
  });
};

numbers.addEventListener('click', function (e) {
  const current = e.target;
  if (current !== numbers) {
    removeActive();
    current.classList.add('active');
  }
});

btn.addEventListener('click', function () {});
