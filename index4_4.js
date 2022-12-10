/*4.	Функция принимает объект с неограниченным количеством полей. Результатом выполнения функции должен быть объект, в котором были отсеяны поля со значениями null или undefined

fn({ a: 1, b: ‘Hello’, c: null, z: undefined}) // { a: 1, b: ‘Hello’ }
fn({ name: ‘alex’, age: 10, friends: [], address: null}) // { name: ‘alex’, age: 10, friends: [], }
*/

const filterNull = (data) => {
  const arrayOfData = Object.entries(data);
  const arrayWithoutNull = arrayOfData.filter((value) => {
    return !(value[1] === null);
  });
  return arrayWithoutNull.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
};

console.log("4.4 ", filterNull({ a: 1, b: "Hello", c: null, z: undefined }));
console.log(
  "4.4 ",
  filterNull({ name: "alex", age: 10, friends: [], address: null })
);
