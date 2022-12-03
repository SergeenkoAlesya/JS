/* Функция принимает массив объектов первым параметров, вторым параметром принимает массив строк (id). Функция должна удалить всех пользователей, чьи id будут найдены в массиве id, которые передаются нашей функцией и вернуть массив, с оставшимися пользователями*/

const users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Tomara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const removeUsers = (users, idArray) =>
  users.filter(({ id }) => !idArray.includes(id));
console.log("№3 ", removeUsers(users, [2, 3]));
console.log("№3 ", removeUsers(users, [3]));
