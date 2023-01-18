import getItem from './src/getItem.js';
import getItemID from './src/getItemId.js';
import validateName from './src/validateName.js';
import validateCardNumber from './src/validateCardNumber.js';
import validateMonth from './src/validateMonth.js';
import validateYear from './src/validateYear.js';
import validateCvc from './src/validateCvc.js';
import customerData from './src/customerData.js';

export const customerNameInput = getItemID('customer-name');
export const customerName = getItem('.customer-name');
export const cardNumberInput = getItemID('card-number');
export const cardNubmer = getItem('.card-number');
export const monthInput = getItemID('month');
export const month = getItem('.month');
export const yearInput = getItemID('year');
export const year = getItem('.year');
export const cvcInput = getItemID('cvc');
export const cvc = getItem('.cvc');
export const submitBtn = getItem('.submit-btn');
export const errorName = getItem('.error-name');
export const errorNumber = getItem('.error-number');
export const errorMonth = getItem('.error-month');
export const errorYear = getItem('.error-year');
export const errorCvc = getItem('.error-cvc');
export const formWrapper = getItem('.form-wrapper');

customerNameInput.addEventListener('keyup', (e) => {
  let value = e.target.value;
  if (value.length >= 32) {
    return;
  }
  customerName.textContent = value;

  if (!value) {
    customerName.textContent = 'jane appleseed';
  }
});

cardNumberInput.addEventListener('keyup', (e) => {
  let valueStr = e.target.value;
  let value = parseInt(e.target.value);

  if (!value || value == null) {
    cardNubmer.textContent = '0000 0000 0000 0000';
  }

  if (value > 0) {
    let slice1 = valueStr.slice(0, 4);
    let slice2 = valueStr.slice(4, 8);
    let slice3 = valueStr.slice(8, 12);
    let slice4 = valueStr.slice(12, 16);

    if (valueStr.length >= 16) {
      monthInput.focus();
      if (valueStr.length == 16) {
        cardNubmer.textContent = `${slice1} ${slice2} ${slice3} ${slice4}`;
      }
      return;
    }
    if (value > 9999999999999999n) {
      return;
    }
    cardNubmer.textContent = `${slice1} ${slice2} ${slice3} ${slice4}`;
  }
});

monthInput.addEventListener('keyup', (e) => {
  let value = e.target.value;
  let valueInt = parseInt(value);

  if (!value) {
    month.textContent = '00';
  }

  if (valueInt > 0) {
    if (value.length >= 2) {
      yearInput.focus();
      if (value.length == 2) {
        month.textContent = value;
      }
      return;
    }

    month.textContent = value;
  }
});

yearInput.addEventListener('keyup', (e) => {
  let value = e.target.value;
  let valueInt = parseInt(value);

  if (!value) {
    year.textContent = '00';
  }

  if (valueInt > 0) {
    if (value.length >= 2) {
      cvcInput.focus();
      if (value.length == 2) {
        year.textContent = value;
      }
      return;
    }

    year.textContent = value;
  }
});

cvcInput.addEventListener('keyup', (e) => {
  let value = e.target.value;
  let valueInt = parseInt(value);

  if (!value) {
    cvc.textContent = '000';
  }

  if (valueInt > 0) {
    if (value.length >= 3) {
      submitBtn.focus();
      if (value.length == 3) {
        cvc.textContent = value;
      }
      return;
    }

    cvc.textContent = value;
  }
});

export function isNumber(str) {
  return /\d/.test(str);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let isFormValid = 0;

  // valudate name
  let nameValid = validateName();
  if (nameValid) {
    console.log('name valid');
    customerData[0].customer_name = customerNameInput.value;
    isFormValid++;
  }

  // validate card number
  let cardValid = validateCardNumber();
  if (cardValid) {
    console.log('card valid');
    customerData[0].card_number = cardNumberInput.value;
    isFormValid++;
  }

  // validate month
  let monthValid = validateMonth();
  if (monthValid) {
    console.log('month valid');
    customerData[0].card_month = cardNumberInput.value;
    isFormValid++;
  }

  // validate year
  let yearValid = validateYear();
  if (yearValid) {
    console.log('year valid');
    customerData[0].card_year = yearInput.value;
    isFormValid++;
  }

  // validate cvc
  let cvcValid = validateCvc();
  if (cvcValid) {
    console.log('cvc valid');
    customerData[0].card_cvc = cvcInput.value;
    isFormValid++;
  }

  console.log(customerData[0]);

  if (isFormValid === 5) {
    formWrapper.innerHTML = `
    <div class="thank-you-wrapper">
          <div class="checkmark">
            <i class="fa-sharp fa-solid fa-check"></i>
          </div>
          <h2>Thank you!</h2>
          <p>We've added your card details</p>
          <button class="btn continue">Continue</button>
        </div>
    `;
  }
});
