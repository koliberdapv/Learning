const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<h4 class="error">There was a problem laoding the product. Please try again later</h4>';
  }
};

const displayProduct = (product) => {
  // company, colors, description, name:title, price, image(url:image)
  const { company, colors, price, name: title, description } = product.fields;
  const { url: image } = product.fields.image[0];
  const correctPrice = price / 100;
  document.title = title.toUpperCase();
  //   colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background:${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img class="img" src="${image}" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${correctPrice}</span>
          <div class="colors">
          ${colorsList}
            <p>${description}</p>
            </div>
        <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
