// callbacks, promises, async/await
// Promises - pending, resolved, rejected
// then catch - pass another callback

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
const container = get('.img-container');
const url =
  'https://images.unsplash.com/photo-1657716143695-1afc0882ccb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTU5NTM5Mw&ixlib=rb-1.2.1&q=80&w=1080';

btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`failed load image from the source: ${url}`));
    });
    img.src = url;
  });
  return promise;
}
