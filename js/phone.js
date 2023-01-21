document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newNumber = updateNumber("phone-input-field", true);
    updatePhonePrice(newNumber);
    calculateTotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newNumber = updateNumber("phone-input-field", false);
    updatePhonePrice(newNumber);
    calculateTotal();
  });
