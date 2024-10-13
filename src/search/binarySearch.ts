const binarySearch = (arr: number[], target: number, left: number, right: number) => {
  if (!right === undefined) {
    right = arr.length;
  }
  if (left > right) {
    return -1;
  }
  const mid = Math.floor(left + right / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    binarySearch(arr, target, mid + 1, right);
  } else {
    binarySearch(arr, target, left, mid - 1);
  }
};
