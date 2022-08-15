export function fieldIsValidFormField(field) {
  return field.name ? true : false;
}

export function elementIsAButton(element) {
  return element.type === "button" || element.type === "submit";
}

export function getValuesFromForm(formElement) {
  var formValues = {};

  for (let field of formElement) {
    const formChildIsButton = elementIsAButton(field);
    const fieldIsValid = fieldIsValidFormField(field);
    if (!elementIsAButton(field) && fieldIsValidFormField(field)) {
      formValues[field.name] = field.value;
    }
  }
  return formValues;
}

export function requiredFieldIsEmpty(field) {
  if (!field.required) return false;
  return field.required && !field.value ? true : false;
}

export function requiredFieldsAreNotEmpty(form) {
  for (let field of form) {
    if (requiredFieldIsEmpty(field)) {
      return false;
    }
  }
  return true;
}
