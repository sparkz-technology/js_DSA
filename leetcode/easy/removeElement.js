/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const filteredArray = nums.filter((num) => num !== val);

  return filteredArray;
};

// Test cases
console.log(removeElement([3, 2, 2, 3], 3)); // [2, 2]
