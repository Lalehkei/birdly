function clearErrors() {
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });
}

function validateSightingForm(formData) {
  clearErrors();

  let isValid = true;

  if (!formData.birdName.trim()) {
    document.querySelector("#bird-name-error").textContent = "Bird name is required.";
    isValid = false;
  }

  if (!formData.location.trim()) {
    document.querySelector("#location-error").textContent = "Location is required.";
    isValid = false;
  }

  if (!formData.date.trim()) {
    document.querySelector("#date-error").textContent = "Date is required.";
    isValid = false;
  }

  if (formData.notes.trim().length < 10) {
    document.querySelector("#notes-error").textContent =
      "Notes must be at least 10 characters long.";
    isValid = false;
  }

  return isValid;
}