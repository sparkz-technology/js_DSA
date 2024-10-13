function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleDistance = apples
    .map((apple) => apple + a)
    .filter((app) => app >= s && app <= t).length;

  const orangeDistance = oranges
    .map((orange) => orange + b)
    .filter((orr) => orr >= s && orr <= t).length;

  return [appleDistance, orangeDistance];
}

const s = 7,
  t = 11;
const a = 5,
  b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

console.log(countApplesAndOranges(s, t, a, b, apples, oranges)); // Output: [1, 1]
