/*4.	 Функция принимает строку и проверяет её на палиндром. В случае если строка является палиндромом возвращает true иначе false*/

const isPalindrome = (word) => word === word.split("").reverse().join("");
console.log("№4 ", isPalindrome("Привет"));
console.log("№4 ", isPalindrome("шалаш"));
