const getItemID = (item) => {
  const newItem = document.getElementById(item);
  if (newItem) {
    return newItem;
  } else {
    console.log(`there is no element ${item}`);
  }
};

export default getItemID;
