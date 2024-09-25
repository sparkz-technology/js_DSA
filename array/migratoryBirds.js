function migratoryBirds(arr) {
  // Count the occurrences of each bird type using reduce
  const birdCount = arr.reduce((count, bird) => {
    count[bird] = (count[bird] || 0) + 1;
    return count;
  }, {});
  console.log(Object.entries(birdCount));

  // Find the maximum frequency and the smallest bird type id with that frequency
  const result = Object.entries(birdCount).reduce(
    (acc, [birdId, frequency]) => {
      if (frequency > acc.maxFrequency) {
        return { maxFrequency: frequency, birdId: +birdId }; // Update max frequency and birdId
      } else if (frequency === acc.maxFrequency) {
        return { ...acc, birdId: Math.min(acc.birdId, +birdId) }; // Take the smaller bird id
      }
      return acc;
    },
    { maxFrequency: 0, birdId: Infinity }
  );

  return result.birdId; // Return the smallest bird id with the highest frequency
}

// Example usage:
const arr0 = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr0)); // Output: 4

const arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(arr1)); // Output: 3
