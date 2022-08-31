const getResendOtpTime = (date: string) => {
  const now = new Date().getTime();
  const expireDate = new Date(date).getTime();

  return Math.floor((expireDate - now) / 1000);
};

export default getResendOtpTime;
