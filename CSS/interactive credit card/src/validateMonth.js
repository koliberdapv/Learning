import { monthInput, errorMonth } from '../app.js';

const validateMonth = () => {
  let result = false;
  const month = monthInput.value;
  const monthInt = parseInt(month);

  if (!month) {
    console.log('there is no month');
    errorMonth.style.visibility = 'visible';
    errorMonth.textContent = "Can't be blank";
    monthInput.classList.add('error-border');
    return false;
  }

  if (monthInt <= 0 || monthInt > 12) {
    console.log('month is wrong');
    errorMonth.style.visibility = 'visible';
    errorMonth.textContent = 'Wrong month';
    monthInput.classList.add('error-border');
    return false;
  }
  if (month) {
    result = true;
    errorMonth.style.visibility = 'hidden';
    monthInput.classList.remove('error-border');
  }

  return result;
};

export default validateMonth;
