import { showLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  showLoading();
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
