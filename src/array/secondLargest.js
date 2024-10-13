const secondLargest = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  const uniqueArr = Array.from(new Set(arr));
  if (uniqueArr.length < 2) {
    return "Second largest number not present";
  }
  return uniqueArr.sort((a, b) => b - a)[1];
};

// Test cases
console.log(secondLargest([1, 2, 3, 4, 5])); // 4
console.log(secondLargest([5, 5, 5, 5, 5])); // "Second largest number not present"

// using reduce
const secondLargest2 = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  const uniqueArr = Array.from(new Set(arr));
  if (uniqueArr.length < 2) {
    return "Second largest number not present";
  }
  return uniqueArr.reduce(
    (acc, val) => {
      if (val > acc[0]) {
        acc[1] = acc[0];
        acc[0] = val;
      } else if (val > acc[1] && val !== acc[0]) {
        acc[1] = val;
      }
      return acc;
    },
    [Number.MAX_VALUE, Number.MIN_VALUE]
  )[1];
};

const secondLargest3 = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  const uniqueArr = Array.from(new Set(arr));
  if (uniqueArr.length < 2) {
    return "Second largest number not present";
  }
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;
  uniqueArr.forEach((val) => {
    if (val > largest) {
      // if current value is greater than largest value then update second largest and largest value
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest && val !== largest) {
      // if current value is greater than second largest value and not equal to largest value then update second largest value
      secondLargest = val;
    }
  });
  return secondLargest;
};
