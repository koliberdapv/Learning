import { cvcInput, errorCvc } from '../app.js';

const validateCvc = () => {
  let result = false;
  const cvc = cvcInput.value;
  const cvcInt = parseInt(cvc);

  if (!cvc) {
    console.log('there is no cvc');
    errorCvc.style.visibility = 'visible';
    cvcInput.classList.add('error-border');
    return false;
  }

  if (cvcInt <= 0 || cvcInt > 999) {
    console.log('cvc is wrong');
    errorCvc.style.visibility = 'visible';
    errorCvc.textContent = 'Please double-check CVC';
    cvcInput.classList.add('error-border');
    return false;
  }

  if (cvc) {
    result = true;
    errorCvc.style.visibility = 'hidden';
    cvcInput.classList.remove('error-border');
  }

  return result;
};

export default validateCvc;
