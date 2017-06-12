function factorial(value) {
  if (value <= 1) {
    return value;
  }
  return value * factorial(value - 1);
}

function factorial2(value) {
  if (value <= 1) {
    return value;
  }

  let result = 1;

  for (let i = 1; i <= value; ++i) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial2(5));
