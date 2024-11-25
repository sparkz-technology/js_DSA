function isPalindrome(string: string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (!/[a-zA-Z0-9]/.test(string[left])) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(string[right])) {
      right--;
    } else if (string[right].toLowerCase() !== string[left].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
