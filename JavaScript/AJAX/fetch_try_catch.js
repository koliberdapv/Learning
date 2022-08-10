const url = './api/people.json';
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      // const name = item.name;
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  //   console.log(displayData);
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// try {
//   console.log(random);
// } catch (error) {
//   console.log(error);
// }
