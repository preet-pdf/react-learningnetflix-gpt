import React from 'react'

const validateEmail = (email) => {
  return /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
}

const validateName = (name) => {
  return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
}

const validatePassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}

export const validateFormData = (name, email, password) => {
  if (!validateEmail(email)) {
    return "Please Enter Proper Email";
  }

  if (name && !validateName(name)) {
    return "Please Enter Proper Name";
  }

  if (!validatePassword(password)) {
    return "Please Enter Proper Password";
  }

  return (
    null
  )
}
