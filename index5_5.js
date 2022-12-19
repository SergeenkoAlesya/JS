// найти факториал

const findFactorial = (number) => {
  if (number === 0) return 0;

  return number > 1 ? number * findFactorial(number - 1) : number;
};

console.log("5.5 ", findFactorial(5));
