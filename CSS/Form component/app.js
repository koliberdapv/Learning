const btn = document.querySelector('.form-btn');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');
const main = document.querySelector('.main');
const email = document.querySelector('.email');
console.log(email);

const submit = () => {
  let count = 0;
  inputs.forEach((item) => {
    const value = item.value;
    if (!value) {
      item.parentElement.classList.add('error');
    } else {
      console.log('success');
      count++;
    }
  });
  console.log(count);

  if (count === 4) {
    main.innerHTML = `<h2 class="success">The subscription has been ordered</h2>`;
  }
  if (email.parentElement.classList.contains('error')) {
    email.placeholder = 'email@example.com';
  }
};

btn.addEventListener('click', submit);

form.addEventListener('click', (e) => {
  const target = e.target;
  target.parentElement.classList.remove('error');
  // target.placeholder = '';
});
