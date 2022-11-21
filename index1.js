// Приветствие для пользователя

const favoriteUser = "Mark";

const sayHello = function (name) {
  if (name.toLowerCase() === favoriteUser.toLowerCase()) {
    return `Hi, ${name}!`;
  }
  return `Hello, ${name}!`;
};

console.log("Task 1");
console.log(sayHello("Oleg"));
console.log(sayHello("Viktor"));
console.log(sayHello("Mark"));
