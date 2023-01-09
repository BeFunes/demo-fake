const assert = require("assert");

// greatest common divisor
function gcd(a, b, ...lst) {
  let res = gcdOfTwoNumbers(a, b);

  lst.forEach((c) => {
    res = gcdOfTwoNumbers(res, c);
  });

  return res;
}

function gcdOfTwoNumbers(a, b) {
  assert(isFinite(a) && isFinite(b));

  if (!b) {
    return a;
  }

  return gcdOfTwoNumbers(b, a % b);
}

module.exports = { gcd, gcdOfTwoNumbers };
