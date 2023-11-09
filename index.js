// Given two integers a and b,
// return the sum of the two integers
// without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function (a, b) {
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};
