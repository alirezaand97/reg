const checkNationalCode = (code: string) => {
  var codeLength = code.length;
  if (codeLength != 10) return false;

  if (+code.slice(3, 9) === 0) return false;
  var lastNumber = +code.slice(9, 10);
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += +code.slice(i, i + 1) * (10 - i);
  }
  sum = sum % 11;
  return (
    (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
  );
};

export default checkNationalCode;
