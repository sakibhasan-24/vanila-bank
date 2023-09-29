const submitBtn = document.getElementById("form-submit");
const emailText = document.getElementById("user-email");
const password = document.getElementById("user-password");
const userName = document.getElementById("user-name");
submitBtn.addEventListener("click", function () {
  console.log(submitBtn);
  //   window.location.href = "banking.html";
  const email = emailText.value;
  const userPassword = password.value;
  if (email.length === 0 || userPassword.length === 0) {
    alert("need proper identity");
  } else {
    window.location.href = "banking.html";
  }
});
console.log(1);
