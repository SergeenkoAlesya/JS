/*Написать функцию которая принимает в себя строчное значение состоящее из одного слова. В слове могут быть буквы разных регистров. Результатом выполнения данной функции должна быть строка, в которой первая буквы заглавная, а все последующие в нижнем регистре.
Если в слове четное количество букв, то и последняя буква должна быть заглавной.*/

const capitalizeString = function (str) {
  if (str.length % 2 === 0) {
    return `${str[0].toUpperCase()}${str
      .slice(1, str.length - 1)
      .toLowerCase()}${str[str.length - 1].toUpperCase()}`;
  }
  return `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`;
};

console.log("Task 6");
console.log(capitalizeString("пиТеР"));
console.log(capitalizeString("javaScript"));
