function pickingNumbers(arr: number[]) {
  const stack: Record<number, number> = {};
  arr.forEach((element) => (stack[element] = (stack[element] || 0) + 1));
  let maxCount = 0;
  for (const key in stack) {
    const currentKey = parseInt(key);
    const currentCount = stack[currentKey];
    const nextCount = stack[currentKey + 1] || 0;
    maxCount = Math.max(maxCount, currentCount + nextCount);
  }
  return maxCount;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
