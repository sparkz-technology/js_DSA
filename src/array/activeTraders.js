function mostActive(customers) {
  const customerCount = {};
  const totalCustomers = customers.length;

  customers.forEach((customer) => {
    customerCount[customer] = (customerCount[customer] || 0) + 1;
  });
  return Object.keys(customerCount)
    .filter((customer) => customerCount[customer] / totalCustomers >= 0.05)
    .sort();
}

const customers = [
  "Alice",
  "Bob",
  "Alice",
  "Eve",
  "Bob",
  "Alice",
  "Eve",
  "John",
];
console.log(mostActive(customers)); // Output: [ 'Alice', 'Bob', 'Eve' ]
