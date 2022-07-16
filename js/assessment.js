const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");

// get all of the pages
const pages = $("#assessment-form .page");
const firstPage = $(pages).first()[0];
const lastPage = $(pages).last()[0];
const activeClass = "active";
const nextButtonContent = "Next Page <i class='fa fa-arrow-right'></i>";

nextButton.addEventListener("click", function () {
  const activePage = $("#assessment-form .page.active");
  // validate before going to the next page.
  const isValid = validatePage(activePage);
  if (isValid) {
    nextPage(activePage);
  } else {
    alert(
      "There are inputs that are not valid. Please fill out all fields and check to make sure your email is valid."
    );
  }
});

backButton.addEventListener("click", function () {
  const activePage = $("#assessment-form .page.active");
  previousPage(activePage);
});

/**
 * Navigate to the next form page.
 * @param {HTMLElement} element The current page element
 * @returns void on it being the last page.
 */
function nextPage(element) {
  const onLastPage = $(lastPage).hasClass(activeClass);
  if (onLastPage) {
    submitForm();
    return;
  }
  $(element).removeClass(activeClass);
  const nextElement = $(element).next();
  if (nextElement[0] === lastPage) {
    nextButton.innerHTML = "Submit Assessment";
  }
  nextElement.addClass(activeClass);
  if (!$(firstPage).hasClass(activeClass)) {
    $(backButton).css("display", "unset");
  }
}

/**
 * Submitting the website assessment form to firebase real-time database.
 */
function submitForm() {
  const form = $("#assessment-form");
  const submittedValues = $(form).serializeArray();
  const formValues = {};
  for (submittedValue of submittedValues) {
    formValues[submittedValue.name] = submittedValue.value;
  }
  window.submitAssessment(formValues);
  alert(
    "Thank you for submitting an inquiry. You will be contacted by email or your preferred contact method shortly."
  );
  //   clear the form fields
  $(form)[0].reset();
  //   go back to the first page.
  $(lastPage).removeClass("active");
  $(firstPage).addClass("active");
}

/**
 * Navigate to the previus form page.
 * @param {HTMLElement} element The active page element
 */
function previousPage(element) {
  $(element).removeClass(activeClass);
  const previousElement = $(element).prev();
  if (previousElement[0] === firstPage) {
    // no backbutton on the first page.
    $(backButton).css("display", "none");
  }
  // change from "submit" text
  nextButton.innerHTML = nextButtonContent;
  $(previousElement).addClass(activeClass);
}

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
