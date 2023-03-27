"use strict";

class App {
  // SELECTING DOM ELEMENTS

  submitBtn = document.querySelector(".submit-btn");
  form = document.querySelector(".email-form");
  formMsg = document.querySelector(".form-message");
  mail = document.getElementById("mail");

  constructor() {
    this.form.addEventListener("submit", this.submitForm.bind(this));
  }

  submitForm(e) {
    e.preventDefault();

    const input = mail.value;
    if (!this.validateEmail(input)) {
      this.submitError();
    }
    if (this.validateEmail(input)) {
      this.removeError();
      this.submitSuccess();
      this.disableForm();
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  submitError() {
    this.form.classList.add("email-form-mobile-gap");
    this.formMsg.classList.add("form-message-error");
    this.mail.style.border = "1px solid rgb(255, 82, 99)";
  }

  removeError() {
    this.formMsg.classList.remove("form-message-error");
    this.mail.style.border = "solid 1px rgba(150, 150, 150, 0.5)";
  }

  submitSuccess() {
    this.form.classList.add("email-form-mobile-gap");
    setTimeout(
      function () {
        this.formMsg.textContent = "Thank you for subscribing!";
        this.formMsg.classList.add("form-message-success");
      }.bind(this),
      200
    );
  }

  disableForm() {
    this.mail.value = "";
    this.mail.setAttribute("disabled", "disabled");
    this.mail.style.cursor = "not-allowed";
    this.submitBtn.setAttribute("disabled", "disabled");
    this.submitBtn.style.cursor = "not-allowed";
  }
}

const app = new App();
