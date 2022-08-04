// async/await
// must have async
// await waits till promise is settled
// error handling - try/catch
// async before the function keyword, await inside the local scope

// async function someFunction {
//     await
// }

// const otherFunction = async() => {
//     await
// }

function get(className) {
  const element = document.querySelector(className);
  if (element) {
    return element;
  } else {
    console.log(`there is no element for ${className}`);
  }
}

const heading1 = get('.one');
const heading2 = get('.two');
const heading3 = get('.three');
const btn = get('.btn');

btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
  return 'hello'; // data
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}
