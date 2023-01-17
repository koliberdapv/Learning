const getItem = (item) => {
  const newItem = document.querySelector(item);
  if (newItem) {
    return newItem;
  } else {
    console.log(`there is no element ${item}`);
  }
};

const getItemID = (item) => {
  const newItem = document.getElementById(item);
  if (newItem) {
    return newItem;
  } else {
    console.log(`there is no element ${item}`);
  }
};

const customerNameInput = getItemID('customer-name');
const customerName = getItem('.customer-name');

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

const cardNumberInput = getItemID('card-number');
const cardNubmer = getItem('.card-number');

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

const monthInput = getItemID('month');
const month = getItem('.month');

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

const yearInput = getItemID('year');
const year = getItem('.year');

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

const cvcInput = getItemID('cvc');
const cvc = getItem('.cvc');

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

const submitBtn = getItem('.submit-btn');
const errorName = getItem('.error-name');
const errorNumber = getItem('.error-number');
const errorMonth = getItem('.error-month');
const errorYear = getItem('.error-year');
const errorCvc = getItem('.error-cvc');

function isNumber(str) {
  return /\d/.test(str);
}

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

const formWrapper = getItem('.form-wrapper');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let isFormValid = 0;

  // valudate name
  let nameValid = validateName();
  if (nameValid) {
    console.log('name valid');
    isFormValid++;
  }

  // validate card number
  let cardValid = validateCardNumber();
  if (cardValid) {
    console.log('card valid');
    isFormValid++;
  }

  // validate month
  let monthValid = validateMonth();
  if (monthValid) {
    console.log('month valid');
    isFormValid++;
  }

  // validate year
  let yearValid = validateYear();
  if (yearValid) {
    console.log('year valid');
    isFormValid++;
  }

  // validate cvc
  let cvcValid = validateCvc();
  if (cvcValid) {
    console.log('cvc valid');
    isFormValid++;
  }

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
