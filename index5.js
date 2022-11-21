// Удалить первый и последний символ строки

const deleteChars = function (str) {
  const strLength = str.length;
  if (strLength <= 2) {
    return " ";
  }

  return str.slice(1, strLength - 1);
};

console.log("Task 5");
console.log(deleteChars("Hello"));
console.log(deleteChars("A"));
