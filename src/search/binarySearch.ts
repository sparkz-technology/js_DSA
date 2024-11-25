interface BinarySearchInput {
  arr: number[];
  target: number;
  left?: number;
  right?: number;
}

const binarySearch = ({ arr, target, left = 0, right = arr.length - 1 }: BinarySearchInput): number => {
  if (left > right) {
    return -1;
  }
  const mid: number = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch({ arr, target, left: mid + 1, right });
  } else {
    return binarySearch({ arr, target, left, right: mid - 1 });
  }
};
