function sum(num1, num2) {
  if (typeof num1 !== "number") return "error";

  return num1 + num2;
}

exports.sum = sum;
