// найти факториал

const findFactorial = (number) => {
  if (number === 0) return 1;

  return number * findFactorial(number - 1);
};

console.log("5.5 ", findFactorial(5));
