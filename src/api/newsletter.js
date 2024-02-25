export const isEmailAlreadyRegistered = (email) => {
  const emails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

  return emails.some((emails) => emails.email === email);

}

export const saveEmailToNewsletter = (email) => {
  const listOfEmails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

  const isEmailListed = isEmailAlreadyRegistered(email);

  if(!isEmailListed) {
    listOfEmails.push({ email: email });
    localStorage.setItem('newsletterEmails', JSON.stringify(listOfEmails));
  }

  return isEmailListed;
}

export const getEmailFromNewsletter = () => {
  const emails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

  return emails;
}