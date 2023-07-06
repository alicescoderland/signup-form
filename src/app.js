const inputEmail = document.querySelector(".inputEmail");
const inputPassword = document.querySelector(".inputPassword");
const inputCheck = document.querySelector(".inputCheck");
const btnCreate = document.querySelector(".btn-create");

const errorMessages = {
  email_incorrect: "No @ in the email",
  password_incorrect: "The password must be longer than 8 characters long",
  accept_incorrect: "Consent not confirmed",
};

inputEmail.addEventListener("change", function () {
  let inputEmailValue = inputEmail.value;
  if (!inputEmailValue.includes("@")) {
    showError(errorMessages.email_incorrect);
  } else {
    hideError();
  }
});

inputPassword.addEventListener("change", function () {
  let inputPasswordValue = inputPassword.value;
  if (inputPasswordValue.length < 8) {
    showError(errorMessages.password_incorrect);
  } else {
    hideError();
  }
});

inputCheck.addEventListener("change", function () {
  let inputCheckValue = inputCheck.value;
  if (!inputCheckValue) {
    showError(errorMessages.accept_incorrect);
  } else {
    hideError();
  }
});

btnCreate.addEventListener("click", function (event) {
  event.preventDefault();
  let inputEmailValue = inputEmail.value;
  let inputPasswordValue = inputPassword.value;
  let inputCheckValue = inputCheck.checked;

  let errorMessagesArray = [];

  if (!inputEmailValue.includes("@")) {
    errorMessagesArray.push(errorMessages.email_incorrect);
  }

  if (inputPasswordValue.length < 8) {
    errorMessagesArray.push(errorMessages.password_incorrect);
  }

  if (!inputCheckValue) {
    errorMessagesArray.push(errorMessages.accept_incorrect);
  }

  if (errorMessagesArray.length > 0) {
    showError(errorMessagesArray);
    return;
  } else {
    alert("Your account was created successfully!");
  }
});

function showError(messages) {
  const errorContent = document.querySelector(".content-error");
  errorContent.innerHTML = "";

  messages.forEach((message) => {
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = message;
    errorContent.appendChild(errorMessage);
  });
  errorContent.style.display = "block";
}

function hideError() {
  const errorElements = document.querySelector(".content-error");
  errorElements.style.display = "none";
}
