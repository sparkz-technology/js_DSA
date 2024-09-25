function migratoryBirds(arr) {
  const birdCount = arr.reduce((count, bird) => {
    count[bird] = (count[bird] || 0) + 1;
    return count;
  }, {});
  console.log(Object.entries(birdCount));

  const result = Object.entries(birdCount).reduce(
    (acc, [birdId, frequency]) => {
      if (frequency > acc.maxFrequency) {
        return { maxFrequency: frequency, birdId: +birdId };
      } else if (frequency === acc.maxFrequency) {
        return { ...acc, birdId: Math.min(acc.birdId, +birdId) };
      }
      return acc;
    },
    { maxFrequency: 0, birdId: Infinity }
  );

  return result.birdId;
}

const arr0 = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr0)); // Output: 4

const arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(arr1)); // Output: 3
