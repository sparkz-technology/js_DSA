const bubbleSort = (arr) => {
  let n = arr.length - 1;
  let swapper;
  for (let i = 0; i < n; i++) {
    swapper = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapper = true;
      }
    }
    if (!swapper) return arr;
  }
};

let numbers = [5, 1, 4, 2, 8];
console.log(bubbleSort(numbers));
