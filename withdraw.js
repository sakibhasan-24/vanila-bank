const withdrawAmount = document.getElementById("withdraw-amount");
const totalAmount = document.getElementById("total-amount");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("btn-withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawInputValue = parseFloat(withdrawInput.value);
  withdrawInput.value = "";
  const totalWithdraw =
    parseFloat(withdrawAmount.innerText) + withdrawInputValue;
  withdrawAmount.innerText = totalWithdraw;
  const totalValue = parseFloat(totalAmount.innerText) + totalWithdraw;
  totalAmount.innerText = totalValue;
});
