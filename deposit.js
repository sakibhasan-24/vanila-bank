const depositAmount = document.getElementById("deposit-amount");
const total = document.getElementById("total-amount");
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("btn-deposit");
depositBtn.addEventListener("click", function () {
  const inputValue = parseFloat(depositInput.value);
  depositInput.value = "";
  if (inputValue <= 0 || isNaN(inputValue)) {
    return alert("this kind of value not allow");
  }
  const totalDeposit = inputValue + parseFloat(depositAmount.innerText);
  depositAmount.innerText = totalDeposit;
  const totalAmount = parseFloat(total.innerText) + totalDeposit;

  //   console.log(totalAmount);
  total.innerText = totalAmount;
});
