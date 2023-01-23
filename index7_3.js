/*3.	Написать метод которые повторяет логику Object.entries(). 
EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]]
*/

const customEntries = (obj) => {
  const resultArray = [];

  for (key in obj) {
    const chunk = [key, obj[key]];
    resultArray.push(chunk);
  }
  return resultArray;
};

console.log("7.3 ", customEntries({ a: 1, b: 2 }));
