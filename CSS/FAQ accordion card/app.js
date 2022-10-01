const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

const info = document.querySelectorAll('.info');
// console.log(info);

info.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('focus');
  });
});
