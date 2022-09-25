const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

const info = get('.info');
const numbers = get('.numbers');
const containers = document.querySelectorAll('.container');
const btn = get('.btn');

const removeClassActive = () => {
  containers.forEach((item) => {
    item.classList.remove('active');
  });
};

const addClassResult = () => {
  info.classList.add('result');
};

numbers.addEventListener('click', function (e) {
  const current = e.target;
  if (current !== numbers) {
    removeClassActive();
    current.classList.add('active');
  }
});

btn.addEventListener('click', function () {
  const active = get('.active');
  const result = active.textContent;

  if (active) {
    addClassResult();
    info.innerHTML = `<img class="img" src="./images/illustration-thank-you.svg" alt="" />
    <div class="rating">You selected ${result} out of 5</div>
    <h2 id="heading">Thank you!</h2>
    <p>
    We appreciate you taking the time to give a rating. <br class="br">If you ever need
    more support, don't hesitate to <br class="br">get in touch!
    </p>`;
  }
});
