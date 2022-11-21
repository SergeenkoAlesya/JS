/*Написать функцию, которая принимает 2 значения. 1 – строка, 2 – число. Если длинна строки, больше чем число функция должна вернуть – ‘String is too long!’ в ином случае вернуть переданную строку. */

const checkStringLength = function (str, value) {
  if (str.length > value) {
    console.log(`String is too long!`);
    return;
  }
  console.log(str);
};

console.log("Task 9");
checkStringLength("HI", 2); // Hi
checkStringLength("HI", 1); // – ‘String is too long!’.
