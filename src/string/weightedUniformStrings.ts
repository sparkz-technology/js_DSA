function weightedUniformStrings(s: string, queries: number[]): string[] {
  const count = (string: string): Record<string, number[]> => {
    return string.split("").reduce<Record<string, number[]>>((acc, letter, index) => {
      if (!acc[letter]) {
        acc[letter] = [1];
      } else {
        if (string[index - 1] === letter) {
          acc[letter][acc[letter].length - 1] += 1;
        } else {
          acc[letter].push(1);
        }
      }
      return acc;
    }, {});
  };

  const letterCounts = count(s);

  return queries.map((query) => {
    for (let i = 1; i <= 26; i++) {
      const letter = String.fromCharCode(96 + i);
      if (Number.isInteger(query / i)) {
        const countsArray = letterCounts[letter];
        if (countsArray && countsArray.some((a) => a * i === query)) {
          return "Yes";
        }
      }
    }
    return "No";
  });
}
