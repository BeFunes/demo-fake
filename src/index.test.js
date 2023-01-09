const { gcd } = require("./index");

describe("tools/utils", function () {
  describe("gcd", function () {
    const cases = [
      {
        input: [5000, 20000, 5000],
        expected: 5000,
      },
      {
        input: [8, 20],
        expected: 4,
      },
      {
        input: [81, 1024, 125],
        expected: 1,
      },
      {
        input: [9, 192],
        expected: 3,
      },

    ];
    for (const { input, expected } of cases) {
      test(`gcd(${input.join(", ")}) = ${expected}`, function () {
        expect(gcd(...input)).toEqual(expected);
      });
    }
  });
});
