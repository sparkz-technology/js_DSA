const groupByCondition = (arr, conditionFn) => {
  if (!Array.isArray(arr) || typeof conditionFn !== "function") {
    return "Invalid input";
  }
  return arr.reduce(
    (acc, val) => {
      if (conditionFn(val)) {
        acc[0].push(val);
      } else {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num) => num % 2 === 0;

const groupedNumbers = groupByCondition(numbers, isEven);
console.log(groupedNumbers);
// Output: [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
