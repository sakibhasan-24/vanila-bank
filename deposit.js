const depositAmount = document.getElementById("deposit-amount");
const total = document.getElementById("total-amount");
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("btn-deposit");
console.log(depositInput);
depositBtn.addEventListener("click", function () {
  //   const inputValue = parseFloat(depositInput.value);
  const inputValue = inputValueProcess(depositInput);
  //   console.log(inputValue);
  //   depositInput.value = "";
  clearInputField(depositInput);
  if (inputValue <= 0 || isNaN(inputValue)) {
    return alert("this kind of value not allow");
  }

  typeValue(inputValue, depositAmount);
  //   const totalDeposit = inputValue + parseFloat(depositAmount.innerText);
  //   depositAmount.innerText = totalDeposit;
  //   console.log(totalDeposit);
  //   general
  //   const totalAmount = parseFloat(total.innerText) + inputValue;
  //   console.log(totalAmount);
  //   total.innerText = totalAmount;
  //   functional
  totalValue(total, inputValue, "depositBtn");
});

function inputValueProcess(inputValue) {
  const inputValues = parseFloat(inputValue.value);
  return inputValues;
}

function clearInputField(input) {
  input.value = "";
}

function totalValue(previousValue, typeValue, type) {
  if (type === "depositBtn") {
    const total = parseFloat(previousValue.innerText) + typeValue;
    previousValue.innerText = total;
  } else {
    const total = parseFloat(previousValue.innerText) - typeValue;
    previousValue.innerText = total;
  }
}
function typeValue(input, previousTypeValue) {
  const total = input + parseFloat(previousTypeValue.innerText);
  previousTypeValue.innerText = total;
}
