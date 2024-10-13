function bonAppetit(bill, k, b) {
  const totalCost = bill.reduce((acc, curr, index) => {
    return index === k ? acc : acc + curr;
  }, 0);

  const annaShare = totalCost / 2;

  if (annaShare === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaShare);
  }
}

const bill1 = [3, 10, 2, 9];
bonAppetit(bill1, 1, 12); // Output: 5

const bill2 = [3, 10, 2, 9];
bonAppetit(bill2, 1, 7); // Output: Bon Appetit
