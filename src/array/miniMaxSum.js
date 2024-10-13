const miniMaxSum = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    const sum = arr.reduce((acc, val) => acc + val, 0) - arr[i];
    nums.push(sum);
  }
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return [min, max];
};

// Test cases
console.log(miniMaxSum([1, 2, 3, 4, 5])); // [10, 14]
