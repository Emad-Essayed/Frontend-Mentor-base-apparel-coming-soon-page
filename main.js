"use strict";

let errorIcon = document.querySelector(
    ".form .input-text input[type='text'] + img"
  ),
  errorText = document.getElementById("error-text");

function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    errorIcon.style.display = "none";
    errorText.style.display = "none";
    return true;
  } else {
    errorIcon.style.display = "block";
    errorText.style.display = "block";

    return false;
  }
}

document.querySelector(".submit").onclick = function (e) {
  e.preventDefault();
  ValidateEmail(document.getElementById("email"));
};
