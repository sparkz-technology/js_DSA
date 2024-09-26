/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const num1 = l1.reverse().join("");
  const num2 = l2.reverse().join("");
  const sum = parseInt(num1) + parseInt(num2);
  return sum.toString().split("").reverse().map(Number);
};

// Test cases
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7, 0, 8]
