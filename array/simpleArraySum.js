const simpleArraySum = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  return arr.reduce((acc, val) => acc + val, 0);
};

const simpleArraySum2 = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
};
