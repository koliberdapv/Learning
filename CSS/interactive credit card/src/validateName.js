import { customerNameInput, errorName } from '../app.js';

const validateName = () => {
  let result = false;
  const name = customerNameInput.value;

  if (!name) {
    console.log('there is no name');
    errorName.style.visibility = 'visible';
    errorName.textContent = "Can't be blank";
    customerNameInput.classList.add('error-border');
  }

  if (name) {
    errorName.style.visibility = 'hidden';
    customerNameInput.classList.remove('error-border');
    result = true;
  }
  return result;
};

export default validateName;
