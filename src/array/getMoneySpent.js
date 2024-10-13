function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      const sum = keyboard + drive;
      if (sum <= b && sum > max) {
        max = sum;
      }
    });
  });
  return max;
}

// Test cases
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58
