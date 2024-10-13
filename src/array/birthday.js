function birthday(s, d, m) {
  const segmentSums = s
    .map((_, i) => s.slice(i, i + m))
    .filter((segment) => segment.length === m)
    .map((segment) => segment.reduce((acc, val) => acc + val, 0));

  return segmentSums.filter((sum) => sum === d).length;
}
