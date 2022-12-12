/*6.	Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое количество символов, функция должна обрезать строку а в конец  добавить многоточие
fn(‘Hello’, 3) // ‘Hel…’ 
*/

const cutString = (str, lenghtStr) => {
  if (str.length <= lenghtStr) {
    return str;
  }
  return str.slice(0, 3) + "...";
};

console.log("4.6", cutString("Hello", 3));
