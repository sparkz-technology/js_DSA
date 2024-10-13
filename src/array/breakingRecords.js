function breakingRecords(scores) {
  const initialValue = {
    maxCount: 0,
    minCount: 0,
    maxScore: scores[0],
    minScore: scores[0],
  };

  const result = scores.slice(1).reduce((acc, score) => {
    if (score > acc.maxScore) {
      acc.maxScore = score;
      acc.maxCount++;
    } else if (score < acc.minScore) {
      acc.minScore = score;
      acc.minCount++;
    }
    return acc;
  }, initialValue);

  return [result.maxCount, result.minCount];
}
