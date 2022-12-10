/*3.	Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз. 

fn([1,1,2,3]) // 1
fn([1,2,3,4,2]) // 2*/

const findMaxNumber = (numbers) => {
  const newObject = numbers.reduce((result, number) => {
    if (!result[number]) {
      result[number] = 0;
    }
    result[number] = result[number] + 1;
    return result;
  }, {});

  let sortable = Object.entries(newObject);
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return sortable[0][0];
};

console.log("4.3 ", findMaxNumber([1, 1, 2, 3]));
console.log("4.3 ", findMaxNumber([1, 2, 3, 4, 2]));
