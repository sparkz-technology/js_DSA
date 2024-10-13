/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split("");
  return arr.reduce((acc, curr, index) => {
    if (romans[curr] < romans[arr[index + 1]]) {
      return acc - romans[curr];
    }
    return acc + romans[curr];
  }, 0);
};

// Test cases
console.log(romanToInt("LVIII")); // 3
