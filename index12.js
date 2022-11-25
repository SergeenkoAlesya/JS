/*Задача 3:

Функция принимает массив чисел. Возвращает массив строк такого вида:*/

// Вариант 1: -	For (let I = 0; …; …) {}

const convertNumbersWithFor = (arrayNumbers) => {
  const convertArray = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    const number = arrayNumbers[i];
    convertArray.push(`Value: ${number}; Index: ${i}; Squared: ${number ** 2}`);
  }
  return convertArray;
};

console.log("№3.1 (for): ", convertNumbersWithFor([3, 4, 6]));

// Вариант 2: -	While

const convertNumbersWithWhile = (arrayNumbers) => {
  const convertArray = [];
  let i = 0;
  while (i < arrayNumbers.length) {
    const number = arrayNumbers[i];
    convertArray.push(`Value: ${number}; Index: ${i}; Squared: ${number ** 2}`);
    i++;
  }
  return convertArray;
};

console.log("№3.2 (While): ", convertNumbersWithWhile([3, 4, 6]));

// Вариант 3: -	-	For of

const convertNumbersWithForOf = (arrayNumbers) => {
  const convertArray = [];
  for (const number of arrayNumbers) {
    convertArray.push(
      `Value: ${number}; Index: ${arrayNumbers.indexOf(number)}; Squared: ${
        number ** 2
      }`
    );
  }
  return convertArray;
};

console.log("№3.3 (For of): ", convertNumbersWithForOf([3, 4, 6]));

// Вариант 4: 	map

const convertNumbersWithMap = (arrayNumbers) => {
  return (convertArray = arrayNumbers.map((number, i) => {
    return `Value: ${number}; Index: ${i}; Squared: ${number ** 2}`;
  }));
};

console.log("№3.4 (map): ", convertNumbersWithMap([3, 4, 6]));
