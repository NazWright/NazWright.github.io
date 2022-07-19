/**
 * Validates a form page.
 * @param {HTMLElement} page The current page being validated
 * @returns {Boolean} If the page is successully validated or not.
 */
// validate elements before proceeding to the nxt page
function validatePage(page) {
  // get all the form element from this page only.
  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const formElements = $(page).find("input, textarea, select");
  for (formElement of formElements) {
    const value = formElement.value;
    if (!value) {
      return false;
    }
    // validating email inputs
    if (formElement.type === "email") {
      if (!value.match(emailPattern)) {
        return false;
      }
    }
  }
  return true;
}
