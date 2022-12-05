/*4.	 Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false*/

const isPalindrome = (word) =>
  word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
console.log("№4 ", isPalindrome("ПривеТ"));
console.log("№4 ", isPalindrome("шалаШ"));
