import { isNumber, cardNumberInput, errorNumber } from '../app.js';

const validateCardNumber = () => {
  let result = false;
  const number = cardNumberInput.value;
  const numberInt = parseInt(number);
  let checkNumber = isNumber(number);

  if (number === '') {
    console.log('there is no card number');
    errorNumber.style.visibility = 'visible';
    errorNumber.textContent = "Can't be blank";
    cardNumberInput.classList.add('error-border');
    return false;
  }

  if (!checkNumber) {
    console.log('card number is NaN');
    errorNumber.style.visibility = 'visible';
    errorNumber.textContent = 'Wrong format, numbers only';
    cardNumberInput.classList.add('error-border');
    return false;
  }

  if (number.length != 16 || numberInt <= 0) {
    console.log('card number wrong lenght');
    errorNumber.style.visibility = 'visible';
    errorNumber.textContent = 'Please, doule-check the card number';
    cardNumberInput.classList.add('error-border');
    return false;
  }

  if (number) {
    result = true;
    errorNumber.style.visibility = 'hidden';
    cardNumberInput.classList.remove('error-border');
  }

  return result;
};
export default validateCardNumber;
