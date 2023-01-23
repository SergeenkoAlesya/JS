/*HW:

1.	Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

Ex:
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/

const chunk = (date, countForSplit) => {
  const result = [];
  for (let i = 0; i < date.length; i += countForSplit) {
    result.push(date.slice(i, i + countForSplit));
  }
  return result;
};

console.log("7.1", chunk(["a", "b", "c", "d"], 2));
console.log("7.1", chunk(["a", "b", "c", "d"], 3));
