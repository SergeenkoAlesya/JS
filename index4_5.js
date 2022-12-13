/*5.	Функция принимает массив чисел, а возвращает чсло которое встречается лишь 1 раз. 

fn([1,2,2,3,4,3,4]) // 1
fn([1,1,2,3,3,4,4]) // 2
*/

const findExclusiveNumber = (numbers) => {
  return numbers.find(
    (number, item) => numbers.indexOf(number) === numbers.lastIndexOf(number)
  );
};

console.log("4.5 ", findExclusiveNumber([1, 2, 2, 3, 4, 3, 4]));
console.log("4.5 ", findExclusiveNumber([1, 1, 2, 3, 3, 4, 4]));
