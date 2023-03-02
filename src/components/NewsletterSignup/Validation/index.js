export default function EmailValidation(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email address.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}