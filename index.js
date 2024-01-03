import { url } from "./server";

const add = (x, y) => {
  return x + y;
};

const substract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  if (y === 0) {
    console.log("Cannot divide by zero");
    return;
  }

  return x / y;
};

console.log(url);
console.log(add(5, 10));
console.log(substract(10, 5));
console.log(multiply(25, 25));
console.log(divide(5, 10));
