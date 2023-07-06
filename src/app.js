const signupButton = document.querySelector(".signup-button");
const signupForm = document.querySelector(".signup-form");

const errorMessages = {
  email: "Email is not correct",
  password:
    "The password must be longer than 6 characters long and contain one capital letter and one number",
  checkbox: "Consent not confirmed",
};

function handleInputChange(event) {
  if (!event.target.validity.valid) {
    showError(event.target, errorMessages[event.target.type]);
  } else {
    hideError(event.target);
  }
  signupButton.disabled = !signupForm.reportValidity();
}

signupForm.addEventListener("change", handleInputChange);

signupButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (!signupForm.reportValidity()) {
    return;
  }
  alert("Your account was created successfully!");
});

function showError(inputElement, message) {
  const errorElement =
    inputElement.parentElement.querySelector(".error-message");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(inputElement) {
  const errorElement =
    inputElement.parentElement.querySelector(".error-message");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}
