/*4.	Написать метод которые повторяет логику Object.fromEntries(). 
EX: customFromEntries([[‘a’, 1], [‘b’, 2]]) // { a: 1, b:2 }
*/
customFromEntries = (arrayForObject) => {
  return arrayForObject.reduce((result, [key, value]) => {
    console.log(key, value);
    result[key] = value;
    return result;
  }, {});
};

console.log(
  "7.4 ",
  customFromEntries([
    ["a", 1],
    ["b", 2],
  ])
);
