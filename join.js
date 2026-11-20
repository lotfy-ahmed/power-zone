const form = document.getElementById("join-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const planSelect = document.getElementById("plan");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const ageError = document.getElementById("age-error");
const planError = document.getElementById("plan-error");
const successMessage = document.getElementById("form-success");

const pageSearch = window.location.search;
const planNames = ["Standard", "Silver", "Gold", "Premium"];

planNames.forEach(function (name) {
  if (pageSearch.indexOf("plan=" + name) !== -1) {
    planSelect.value = name;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const ageValue = ageInput.value.trim();
  const planValue = planSelect.value;
  const age = Number(ageValue);

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  ageError.textContent = "";
  planError.textContent = "";
  successMessage.textContent = "";
  nameInput.style.borderColor = "";
  emailInput.style.borderColor = "";
  phoneInput.style.borderColor = "";
  ageInput.style.borderColor = "";
  planSelect.style.borderColor = "";

  if (nameValue === "") {
    nameError.textContent = "Enter your name";
    nameInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (nameValue.length < 3 || nameValue.length > 15) {
    nameError.textContent = "Name must be between 3 and 15 characters.";
    nameInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (emailValue === "") {
    emailError.textContent = "Enter your email";
    emailInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
    emailError.textContent = "Enter a valid email address";
    emailInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (phoneValue === "") {
    phoneError.textContent = "Enter your phone number";
    phoneInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (phoneValue.length < 10) {
    phoneError.textContent = "Enter a valid phone number";
    phoneInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (ageValue === "") {
    ageError.textContent = "Enter your age";
    ageInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (age < 10 || age > 100) {
    ageError.textContent = "Enter an age between 10 and 100";
    ageInput.style.borderColor = "#FF8A8A";
    return;
  }

  if (planValue === "") {
    planError.textContent = "Choose a plan";
    planSelect.style.borderColor = "#FF8A8A";
    return;
  }

  nameInput.style.borderColor = "#4CAF50";
  emailInput.style.borderColor = "#4CAF50";
  phoneInput.style.borderColor = "#4CAF50";
  ageInput.style.borderColor = "#4CAF50";
  planSelect.style.borderColor = "#4CAF50";

  successMessage.textContent = "Thank you! We will contact you soon.";
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  ageInput.value = "";
  planSelect.value = "";
});

form.addEventListener("input", function () {
  successMessage.textContent = "";
});
