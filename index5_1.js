/*1.	Complete the solution so that the function will break up camel casing, using a space between words.

EX: 
fn("camelCasing")  //  "camel Casing"
fn("identifier")  //  "identifier"
fn(‘helloMyDearFriend’) // ’hello My Dear Friend’
*/

const createString = (str) => {
  return str
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        char = " " + char;
      }
      return char;
    })
    .join("");
};

console.log("5.1 ", createString("camelCasing"));
console.log("5.1 ", createString("identifier"));
console.log("5.1 ", createString("helloMyDearFriend"));
