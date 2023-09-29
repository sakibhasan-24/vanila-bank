const withdrawAmount = document.getElementById("withdraw-amount");
const totalAmount = document.getElementById("total-amount");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("btn-withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawInputValue = inputValueProcess(withdrawInput);
  clearInputField(withdrawInput);
  if (withdrawInputValue <= 0 || isNaN(withdrawInputValue)) {
    return alert("this kind of value not allow");
  }
  if (parseFloat(totalAmount.innerText) < withdrawInputValue) {
    return alert("insufficient balance");
  }
  typeValue(withdrawInputValue, withdrawAmount);
  totalValue(total, withdrawInputValue);
});
