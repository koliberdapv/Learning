import { yearInput, errorYear } from '../app.js';

const validateYear = () => {
  let result = false;
  const year = yearInput.value;
  const yearInt = parseInt(year);

  if (!year) {
    console.log('there is no year');
    errorYear.style.visibility = 'visible';
    errorYear.textContent = "Can't be blank";
    yearInput.classList.add('error-border');
    return false;
  }

  if (yearInt <= 0 || yearInt > 99) {
    console.log('year is wrong');
    errorYear.style.visibility = 'visible';
    errorYear.textContent = 'Wrong year';
    yearInput.classList.add('error-border');
    return false;
  }

  if (year) {
    result = true;
    errorYear.style.visibility = 'hidden';
    yearInput.classList.remove('error-border');
  }

  return result;
};

export default validateYear;
