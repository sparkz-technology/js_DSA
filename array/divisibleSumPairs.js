function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }

  return count;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
const result = divisibleSumPairs(n, k, ar);
console.log(result); // Output: 5
