function rotateLeft(d, arr) {
  const result = [...arr];
  const n = result.length;

  d = d % n;

  for (let i = 0; i < d; i++) {
    const firstVal = result.shift();
    result.push(firstVal);
  }

  return result;
}

