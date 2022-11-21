/*Написать функцию, которая принимает букву, если буква является большой, функция возвращает ‘Оууу май, большая буква!’. В ином случае ‘Нет уж, маленькие буквы - скучно’*/

const checkLetterCase = function (letter) {
  if (letter === letter.toUpperCase()) {
    console.log("Оууу май, большая буква!");
    return;
  }
  console.log("Нет уж, маленькие буквы - скучно");
};

console.log("Task 7");
checkLetterCase("A");
checkLetterCase("s");
