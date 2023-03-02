export default function Validation(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = 'First name required.';
  } else if (!/^[A-Za-zА-Яа-я]+/.test(values.firstname.trim())) {
    errors.firstname = 'Please enter a valid name.';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Last name required.';
  } else if (!/^[A-Za-zА-Яа-я]+/.test(values.lastname.trim())) {
    errors.lastname = 'Please enter a valid name.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email, so we can send you a message.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.email2) {
    errors.email2 = 'Email confirmation required.';
  } else if (values.email2 !== values.email) {
    errors.email2 = 'Please confirm that both email addresses are the same.';
  }

  if (!values.select.trim()) {
    errors.select = 'Select the nature of your contact.';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.length > 1200) {
    errors.message = '1200 characters limit exceeded.';
  }
  
  return errors;
}