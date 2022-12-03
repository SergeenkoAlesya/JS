/*2.	Функция принимает массив слов, возвращает новый массив слов, у которых первая буква большая, остальные маленькие. Чем-то очень похоже на функцию которую мы писали для одного слова.

Пример: fn([‘hello’, ‘wOrLd’]) // [‘Hello’, ‘World’];*/

const createCamelCaseArray = (arrayofWords) =>
  arrayofWords.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
console.log("№2 ", createCamelCaseArray(["hello", "wOrLd"]));
