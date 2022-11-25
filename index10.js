/*Задача 1:

Функция принимает 2 аргумента 1 – массив имён, 2 – массив букв;
Если имя пользователя из первого массива начинается с буквы, которая есть во втором аргументе – этот пользователь не должен попасть в массив результата. */

const userList = ["Alex", "alex", "Max", "Vika", "Petr", "Alexandra"];
const blockList = ["a", "p"];

// Вариант 1: -	For (let I = 0; …; …) {}

const checkFirstLetterWithFor = (firstLetter, letters) => {
  for (let i = 0; i < letters.length; i++) {
    const ignoreLetter = letters[i].toLowerCase();
    if (firstLetter === ignoreLetter) {
      return false;
    }
  }
  return true;
};

const filterArrayWithFor = (users, letters) => {
  const newArray = [];
  for (let i = 0; i < users.length; i++) {
    const firstLetter = users[i][0].toLowerCase();
    if (checkFirstLetterWithFor(firstLetter, letters)) {
      newArray.push(users[i]);
    }
  }
  return newArray;
};

console.log("№1.1 (for): ", filterArrayWithFor(userList, blockList));

// Вариант 2: -	While

const checkFirstLetterWithWhile = (firstLetter, letters) => {
  let i = 0;
  while (i < letters.length) {
    const ignoreLetter = letters[i].toLowerCase();
    if (firstLetter === ignoreLetter) {
      return false;
    }
    i++;
  }
  return true;
};

function filterArrayWithWhile(users, letters) {
  const newArray = [];
  let i = 0;
  while (i < users.length) {
    const firstLetter = users[i][0].toLowerCase();
    if (checkFirstLetterWithWhile(firstLetter, letters)) {
      newArray.push(users[i]);
    }
    i++;
  }
  return newArray;
}

console.log("№1.2 (While): ", filterArrayWithWhile(userList, blockList));

// Вариант 3: -	-	For of

const checkFirstLetterWithForOf = (firstLetter, letters) => {
  let i = 0;
  for (const letter of letters) {
    const ignoreLetter = letter[i].toLowerCase();
    if (firstLetter === ignoreLetter) {
      return false;
    }
    i++;
  }
  return true;
};

function filterArrayWithForOf(users, letters) {
  const newArray = [];
  let i = 0;
  for (const user of users) {
    const firstLetter = user[0].toLowerCase();
    if (checkFirstLetterWithWhile(firstLetter, letters)) {
      newArray.push(user);
    }
    i++;
  }
  return newArray;
}

console.log("№1.3 (For of ): ", filterArrayWithForOf(userList, blockList));

// Вариант 4:

const filterArray = (users, letters) => {
  return (newArray = users.filter((user) => {
    const firstLetter = user[0].toLowerCase();
    return !letters.includes(firstLetter);
  }));
};

console.log("№1.4 (filter,  includes): ", filterArray(userList, blockList));
