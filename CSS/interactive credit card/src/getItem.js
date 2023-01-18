const getItem = (item) => {
  const newItem = document.querySelector(item);
  if (newItem) {
    return newItem;
  } else {
    console.log(`there is no element ${item}`);
  }
};

export default getItem;
