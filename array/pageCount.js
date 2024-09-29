function pageCount(n, p) {
  return Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2));
}

// Test cases
console.log(pageCount(5, 4)); // 0
console.log(pageCount(6, 2)); // 1

// explaination:
// n = 5, p = 4
// The book has 5 pages, and the student wants to turn to page 4. The minimum number of pages to turn is 0: either start at the beginning or the end of the book.

console.log(Math.floor(3 / 2)); // 2
