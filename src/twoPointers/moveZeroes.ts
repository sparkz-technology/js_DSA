function moveZeroes(array: number[]) {
  let left = 0;
  for (let right = 0; right < array.length; right++) {
    const element = array[right];
    if (element !== 0) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
    }
  }
  return array;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
