/*Задача 2:

Функция принимает массив букв разных регистров. Результатом функции должен быть новый массив где буквы которые были в нижнем регистре станут в верхнем, а в верхнем станут в нижнем*/

// Вариант 1: -	For (let I = 0; …; …) {}

const convertLettersWithFor = (arrayLetters) => {
  const convertArray = [];
  for (let i = 0; i < arrayLetters.length; i++) {
    const firstLetter = arrayLetters[i];
    if (firstLetter === firstLetter.toUpperCase()) {
      convertArray.push(firstLetter.toLowerCase());
    } else {
      convertArray.push(firstLetter.toUpperCase());
    }
  }
  return convertArray;
};

console.log("№2.1 (for): ", convertLettersWithFor(["a", "B", "c"]));

// Вариант 2: -	While

const convertLettersWithWhile = (arrayLetters) => {
  const convertArray = [];
  let i = 0;
  while (i < arrayLetters.length) {
    const firstLetter = arrayLetters[i];
    if (firstLetter === firstLetter.toUpperCase()) {
      convertArray.push(firstLetter.toLowerCase());
    } else {
      convertArray.push(firstLetter.toUpperCase());
    }
    i++;
  }
  return convertArray;
};

console.log("№2.2 (While): ", convertLettersWithWhile(["a", "B", "c"]));

// Вариант 3: -	-	For of

const convertLettersWithForOf = (arrayLetters) => {
  const convertArray = [];
  for (const letter of arrayLetters) {
    if (letter === letter.toUpperCase()) {
      convertArray.push(letter.toLowerCase());
    } else {
      convertArray.push(letter.toUpperCase());
    }
  }
  return convertArray;
};

console.log("№2.3 (For of): ", convertLettersWithForOf(["a", "B", "c"]));

// Вариант 4: 	map

const convertLettersWithMap = (arrayLetters) => {
  return (convertArray = arrayLetters.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    }
    return letter.toUpperCase();
  }));
};

console.log("№2.4 (map): ", convertLettersWithMap(["a", "B", "c"]));
