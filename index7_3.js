/*3.	Написать метод которые повторяет логику Object.entries(). 
EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]]
*/

customEntries = (obj) => {
  const resultArray = [];
  let i = 0;
  for (key in obj) {
    resultArray[i] = [];
    resultArray[i].push(key);
    resultArray[i].push(obj[key]);
    i++;
  }
  return resultArray;
};

console.log("7.3 ", customEntries({ a: 1, b: 2 }));
