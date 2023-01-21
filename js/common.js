function updateNumber(inputFieldId, isIncreased) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const previousNumber = parseInt(inputFieldValueString);

  let newNumber;
  if (isIncreased === true) {
    newNumber = previousNumber + 1;
  } else {
    newNumber = previousNumber - 1;
  }

  inputField.value = newNumber;

  return newNumber;
}

function setTextValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}

function updatePhonePrice(newNumber) {
  const totalPrice = newNumber * 1219;
  const phonePriceElement = setTextValueById("phone-price", totalPrice);
  return totalPrice;
}

function updateCasePrice(newNumber) {
  const totalPrice = newNumber * 59;
  const phonePriceElement = setTextValueById("case-price", totalPrice);
  return totalPrice;
}

function calculateTotal() {
  //calculate sub-total and set new sub-total
  const currentPhoneTotal = document.getElementById("phone-price");
  console.log(typeof currentPhoneTotal);
  const currentCaseTotal = document.getElementById("case-price");
  const newSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextValueById("sub-total", newSubTotal);

  //calculate tax-amount and set new tax amount
  const taxString = (newSubTotal * 0.1).toFixed(2);
  const tax = parseFloat(taxString);
  setTextValueById("tax-amount", tax);

  //calculate final amount and set it
  const finalTotal = newSubTotal + tax;
  setTextValueById("final-total", finalTotal);
}
