/*8.	Написать свою реализацию метода массива filter (myFilter) которая работает точно так же как существующая. ВСЕ массивы должны иметь этот метод. Примеры ниже.

const numbers = [1,2,3]
	
	const result1 = numbers.myMap((number) => number > 2) // [3]
	const result2 = numbers.myMap((number) => number % 2 === 0) // [2]

*/

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let item of this) {
    if (cb(item)) {
      result.push(item);
    }
  }
  return result;
};

const numbers2 = [1, 2, 3];

console.log(
  "4.8 ",
  numbers2.myFilter((number) => number > 2)
);
console.log(
  "4.8 ",
  numbers2.myFilter((number) => number % 2 === 0)
);
