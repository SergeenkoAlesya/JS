/*2.	Для задания вам понадобиться вот этот сайт https://jsonplaceholder.typicode.com/.

Вам потребуется сделать 2 запроса на данные эндпоинты  

Результатом работы вашей функции должен быть массив пользователей. У каждого объекта пользователя должно появиться поле myPosts: [<в этом массиве будут посты, которые сделал этот пользователь>]. Поле массив, так как у одного пользователя может быть более 1-го поста.
*/

const solution = async () => {
  try {
    const postsInfo = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());

    const usersInfo = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    const datePosts = postsInfo.reduce((result, { userId, body }) => {
      if (!result[userId]) {
        result[userId] = [];
      }

      result[userId].push(body);

      return result;
    }, {});

    for (let i = 0; i < usersInfo.length; i++) {
      usersInfo[i].myPosts = datePosts[usersInfo[i].id];
    }

    console.log(usersInfo);
  } catch (error) {}
};

console.log("7.2", solution());
