function sockMerchant(n, ar) {
  const socks = ar.reduce((acc, sock) => {
    acc[sock] = acc[sock] + 1 || 1;
    return acc;
  }, {});
  return Object.values(socks).reduce((acc, sock) => {
    return acc + Math.floor(sock / 2);
  }, 0);
}

// Test cases
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
