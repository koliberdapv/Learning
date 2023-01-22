const graph = document.querySelector('.graph');
const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', () => {
  fetchAmount();
});

const fetchAmount = async () => {
  graph.innerHTML = `<div className="loading"></div>`;

  const responce = await fetch('./data.json');
  const info = await responce.json();
  renderGraph(info);
  return info;
};

const renderGraph = (data) => {
  let numbers = [];
  data.map((item, index) => {
    numbers[index] = item.amount;
  });
  const biggestNumber = Math.max(...numbers);

  const list = data
    .map((item) => {
      const { day, amount } = item;
      const maxContainerHight = 68;
      const newHeight = (amount / biggestNumber) * maxContainerHight;
      return `
      <div class="day">
            <div class="amount">
              <p>$${amount}</p>
            </div>
            <div class="day-size" style="height:${newHeight}%"></div>
            <p class="week-day">${day}</p>
          </div>
      `;
    })
    .join('');

  graph.innerHTML = list;

  const days = document.querySelectorAll('.day-size');

  days.forEach((day) => {
    day.addEventListener('mouseover', () => {
      day.previousSibling.previousSibling.style.visibility = 'visible';
    });
    day.addEventListener('mouseout', () => {
      day.previousSibling.previousSibling.style.visibility = 'hidden';
    });
  });
};
