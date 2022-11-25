/*Задание 4:

Функция принимает, массив строчных и числовых значений. Функция должна вернуть новый массив состоящий только из строк, количество символов которых чётное.*/

// Вариант 1: -	For (let I = 0; …; …) {}

const filterArrayValuesWithFor = (arrayValues) => {
  const convertArray = [];
  for (let i = 0; i < arrayValues.length; i++) {
    const value = arrayValues[i];
    if (typeof value === "string" && value.length % 2 === 0) {
      convertArray.push(value);
    }
  }
  return convertArray;
};

console.log(
  "№4.1 (for): ",
  filterArrayValuesWithFor(["Hi", 2, 3, 4, 5, "JS", 2, "C++"])
);

// Вариант 2: -	While

const filterArrayValuesWithWhile = (arrayValues) => {
  const convertArray = [];
  let i = 0;
  while (i < arrayValues.length) {
    const value = arrayValues[i];
    if (typeof value === "string" && value.length % 2 === 0) {
      convertArray.push(value);
    }
    i++;
  }
  return convertArray;
};

console.log(
  "№4.2 (While): ",
  filterArrayValuesWithWhile(["Hi", 2, 3, 4, 5, "JS", 2, "C++"])
);

// Вариант 3: -	-	For of

const filterArrayValuesWithForOf = (arrayValues) => {
  const convertArray = [];
  for (const value of arrayValues) {
    if (typeof value === "string" && value.length % 2 === 0) {
      convertArray.push(value);
    }
  }
  return convertArray;
};

console.log(
  "№4.3 (For of): ",
  filterArrayValuesWithForOf(["Hi", 2, 3, 4, 5, "JS", 2, "C++"])
);

// Вариант 4: 	filter

const filterArrayValuesWithfilter = (arrayValues) => {
  return (convertArray = arrayValues.filter((value) => {
    return typeof value === "string" && value.length % 2 === 0;
  }));
};

console.log(
  "№4.4 (filter): ",
  filterArrayValuesWithfilter(["Hi", 2, 3, 4, 5, "JS", 2, "C++"])
);
