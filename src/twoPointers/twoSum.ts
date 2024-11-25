function twoSum(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

console.log(twoSum([1, 2, 3, 4, 6], 10)); // Output: [3, 4]
