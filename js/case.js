document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newNumber = updateNumber("case-input-field", true);
  updateCasePrice(newNumber);
  calculateTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newNumber = updateNumber("case-input-field", false);
    updateCasePrice(newNumber);
    calculateTotal();
  });
