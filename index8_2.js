/*2.	Ваша задача написать игру угадай число. 

Что нужно реализовать в игре: 
Пользовательский ввод реализовать через promt() отображение подсказок через alert()
*/

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const guessNumber = () => {
  const number = getRandomNumber(1, 100);
  let result = 0;
  let quantityGuess = Number(prompt("Введите количество попыток ввода числа."));
  while (number !== result && quantityGuess > 0) {
    result = Number(prompt("Введите число в диапозоне от 1 до 100"));
    if (result < number) {
      alert("Введенное число меньше загаданного.");
    }
    if (result > number) {
      alert("Введенное число больше загаданного.");
    }
    quantityGuess--;
  }

  if (number === result) {
    alert("Вы угадали");
  } else {
    alert("Вы проиграли");
  }
};

guessNumber();
