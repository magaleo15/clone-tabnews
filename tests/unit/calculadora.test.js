const calc = require("../../models/calculator.js");

test("sum 2+2 must return 4", () => {
  const result = calc.sum(2, 2);
  expect(result).toBe(4);
});

test("sum 5+100 must return 105", () => {
  const result = calc.sum(5, 100);
  expect(result).toBe(105);
});

test("string 'banana' + 100 should return error", () => {
  const result = calc.sum("banana", 100);
  expect(result).toBe("error");
});
