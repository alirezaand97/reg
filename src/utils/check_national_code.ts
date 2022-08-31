const checkNationalCode = (code: string) => {
  var codeLength = code.length;
  if (codeLength != 10) return false;
  if (parseInt(code.slice(3, 9), 10) === 0) return false;
  var lastNumber = parseInt(code.slice(9, 10), 10);
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += parseInt(code.slice(i, i + 1), 10) * (10 - i);
  }
  sum = sum % 11;
  return (
    (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
  );
};

export default checkNationalCode;
