// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

const greatestDiv = (num0, num1) => {
  if (!num1) {
    return num0;
  }

  return greatestDiv(num1, num0 % num1);
};

console.log("--------Tests--------");
console.log(greatestDiv(8, 45));
console.log(greatestDiv(15, 20));
console.log(greatestDiv(36, 84));
console.log(greatestDiv(500, 3100));
