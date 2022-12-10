/*7.	Написать свою реализацию метода массива map (myMap) которая работает точно так же как существующая. ВСЕ массивы должны иметь этот метод. Примеры ниже.

const numbers = [1,2,3]
	
	const result1 = numbers.myMap((number) => number * 2) // [2,4,6]
	const result2 = numbers.myMap((number) => String(number)) // [‘1’, ‘2’, ‘3’]
*/

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let item of this) {
    result.push(cb(item));
  }
  return result;
};

const numbers = [1, 2, 3];

const result1 = numbers.myMap((number) => number * 2);
const result2 = numbers.myMap((number) => String(number));
console.log("4.7 ", result1);
console.log("4.7 ", result2);
