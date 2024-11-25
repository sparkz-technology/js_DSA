function replaceWithGreaterElement(arr: number[]) {
  let length = arr.length;

  const result = [];
  for (let i = 0; i < length; i++) {
    let max = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        break;
      }
    }
    result[i] = max;
  }
  return result;
}

// Test the function
let arr = [5, 3, 7, 2, 4, 9, 6];
let result = replaceWithGreaterElement(arr);
console.log(result); // Output: [7, 7, 9, 4, 9, 9, 6]
