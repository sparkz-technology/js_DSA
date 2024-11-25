function maxArea(array: number[]) {
  let left = 0;
  let right = array.length - 1;
  let maxArea = 0;
  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(array[left], array[right]);
    const area = width + minHeight;
    maxArea = Math.max(maxArea, area);
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
