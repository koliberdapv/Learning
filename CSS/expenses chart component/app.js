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
  const list = data
    .map((item, index) => {
      const { day, amount } = item;
      return `
      <div class="day-${index + 1}">
            <div class="amount">
              <p>$${amount}</p>
            </div>
            <div class="day-${index + 1}-size"></div>
            <p class="day">${day}</p>
          </div>
      `;
    })
    .join('');

  graph.innerHTML = list;

  let numbers = [];
  data.map((item, index) => {
    numbers[index] = item.amount;
  });
  const max = Math.max(...numbers);

  const day1 = document.querySelector('.day-1-size');
  const day2 = document.querySelector('.day-2-size');
  const day3 = document.querySelector('.day-3-size');
  const day4 = document.querySelector('.day-4-size');
  const day5 = document.querySelector('.day-5-size');
  const day6 = document.querySelector('.day-6-size');
  const day7 = document.querySelector('.day-7-size');

  const newHeightDay1 = (numbers[0] / max) * 68;
  const newHeightDay2 = (numbers[1] / max) * 68;
  const newHeightDay3 = (numbers[2] / max) * 68;
  const newHeightDay4 = (numbers[3] / max) * 68;
  const newHeightDay5 = (numbers[4] / max) * 68;
  const newHeightDay6 = (numbers[5] / max) * 68;
  const newHeightDay7 = (numbers[6] / max) * 68;

  day1.style.height = `${newHeightDay1}%`;
  day2.style.height = `${newHeightDay2}%`;
  day3.style.height = `${newHeightDay3}%`;
  day4.style.height = `${newHeightDay4}%`;
  day5.style.height = `${newHeightDay5}%`;
  day6.style.height = `${newHeightDay6}%`;
  day7.style.height = `${newHeightDay7}%`;

  day1.addEventListener('mouseover', () => {
    day1.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day1.addEventListener('mouseout', () => {
    day1.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day2.addEventListener('mouseover', () => {
    day2.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day2.addEventListener('mouseout', () => {
    day2.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day3.addEventListener('mouseover', () => {
    day3.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day3.addEventListener('mouseout', () => {
    day3.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day4.addEventListener('mouseover', () => {
    day4.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day4.addEventListener('mouseout', () => {
    day4.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day5.addEventListener('mouseover', () => {
    day5.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day5.addEventListener('mouseout', () => {
    day5.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day6.addEventListener('mouseover', () => {
    day6.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day6.addEventListener('mouseout', () => {
    day6.previousSibling.previousSibling.style.visibility = 'hidden';
  });

  day7.addEventListener('mouseover', () => {
    day7.previousSibling.previousSibling.style.visibility = 'visible';
  });
  day7.addEventListener('mouseout', () => {
    day7.previousSibling.previousSibling.style.visibility = 'hidden';
  });
};
