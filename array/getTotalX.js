const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const lcm = (x, y) => (x * y) / gcd(x, y);

function getTotalX(a, b) {
  const lcm_a = a.reduce((acc, val) => lcm(acc, val), 1);

  const gcd_b = b.reduce((acc, val) => gcd(acc, val));

  const validNumbers = Array.from(
    { length: Math.floor(gcd_b / lcm_a) },
    (_, i) => (i + 1) * lcm_a
  ).filter((num) => gcd_b % num === 0);

  return validNumbers.length;
}
