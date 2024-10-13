const linearSearch = (arr: Array<number>, target: number) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i; // found
    }
  }
  return -1; //not found
};


