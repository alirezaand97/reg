export const mobileRegex = /^(\+98|0)?9\d{9}$/;
export const underCasePassRegex = /(?=.*[a-z])/;
export const upperCasePassRegex = /(?=.*[A-Z])/;
export const numberPasswordRegex = /(?=.*?[0-9])/;
export const specialCharPassRegex = /(?=.*?[#?!@$%^&*-])/;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,}$/g;
