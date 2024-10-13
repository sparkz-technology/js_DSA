const birthdayCakeCandles = (candles) => {
  let max = Math.max(...candles);
  return candles.filter((candle) => candle === max).length;
};

// Test cases
console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
