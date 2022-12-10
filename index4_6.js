/*6.	Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое количество символов, функция должна обрезать строку а в конец  добавить многоточие
fn(‘Hello’, 3) // ‘Hel…’ 
*/

const cutString = (str, lenghtStr) => {
  if (str.length <= lenghtStr) {
    return str;
  }
  let newString = "";
  for (let letter of str) {
    if (newString.length >= lenghtStr) {
      newString = newString + "...";
      return newString;
    }
    newString = newString + letter;
  }
};

console.log("4.6", cutString("Hello", 3));
