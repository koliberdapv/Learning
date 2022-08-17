const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      // id,name,image,price
      const { id } = product;
      const { name, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a class="single-product" href="product.html?id=${id}">
            <img src="${img}" class="img single-product-img" alt="title" />
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join(' ');
  productsDOM.innerHTML = ` <div class="products-center">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
