function countingValleys(steps, path) {
  let valleys = 0;
  let altitude = 0;

  path.split("").reduce((acc, cur) => {
    if (cur === "U") {
      altitude++;
      if (altitude === 0) {
        valleys++;
      }
    } else {
      altitude--;
    }
    return acc;
  }, 0);

  return valleys;
}
