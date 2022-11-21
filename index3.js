// Найти минимальное значение

const minValue = function (value1, value2) {
  if (value1 < value2) {
    return value1;
  }
  if (value2 < value1) {
    return value2;
  }

  return "Values equal";
};

console.log("Task 3");
console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));
