let isPalindrome = function (input) {
  return input == input.toString().split('').reverse().join('');
};

console.log(isPalindrome(1234321));
console.log(isPalindrome(1234329));
