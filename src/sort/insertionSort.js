const insertionSort = (array) => {
  const length = array.length;

  for (let unsortedIndex = 1; unsortedIndex < length; unsortedIndex++) {
    let key = array[unsortedIndex];
    let sortedIndex = unsortedIndex - 1;

    while (sortedIndex >= 0 && array[sortedIndex] > key) {
      array[sortedIndex + 1] = array[sortedIndex];
      sortedIndex--;
    }

    array[sortedIndex + 1] = key;
  }

  return array;
};

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(insertionSort(numbers));
