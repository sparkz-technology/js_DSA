function aVeryBigSum(ar) {
  if (ar.length === 0) return 0;
  return ar.reduce((acc, val) => acc + val, 0);
}
