/*HW:

1.	Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

Ex:
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/

const chunk = (data, countForSplit) => {
  const result = [];
  for (let i = 0; i < data.length; i += countForSplit) {
    result.push(data.slice(i, i + countForSplit));
  }
  return result;
};

console.log("7.1", chunk(["a", "b", "c", "d"], 2));
console.log("7.1", chunk(["a", "b", "c", "d"], 3));
