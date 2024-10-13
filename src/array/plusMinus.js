const plusMinus = (arr) => {
  const n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach((val) => {
    if (val > 0) {
      positive++;
    } else if (val < 0) {
      negative++;
    } else {
      zero++;
    }
  });
  const positiveFraction = positive / n;
  const negativeFraction = negative / n;
  const zeroFraction = zero / n;
  return [positiveFraction, negativeFraction, zeroFraction];
};
