export const mobileRegex = /^(\+98|0|98)9\d{9}$/;
export const lowerCaseRegex = /(?=.*[a-z])/;
export const upperCaseRegex = /(?=.*[A-Z])/;
export const numberRegex = /(?=.*?[0-9])/;
export const justNumberRegex = /^[0-9]$/;
// export const specialCharRegex = /(?=.*?[#?!@$%^&*-.])/;
export const specialCharRegex = /(?=.*[\W])/;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/g;
export const persianRegex = /^[\u0600-\u06FF\s]+$/;
export const englishRegex = /^[\u0041-\u007A\s]+$/;
export const englishChar = /(?=.*[a-zA-Z0-9])/;
