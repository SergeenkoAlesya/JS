/*Написать функцию, которая склеивает 2 строки друг с другом. 
Имейте ввиду, между ними должен быть пробел.*/

const concatenate = function (str1, str2) {
  return `${str1} ${str2}`;
};

console.log("Task 8");
console.log(concatenate("Hello", "World")); // ‘Hello World’.
