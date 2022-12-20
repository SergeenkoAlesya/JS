/*An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
findMissing([1, 3, 5, 9, 11]) // 7

*/

const findMissing = (date) => {
  const step = Math.min(date[1] - date[0], date[2] - date[1]);
  let result = 0;

  date.forEach((currentElement, index) => {
    if (
      typeof date[index + 1] === "number" &&
      currentElement + step !== date[index + 1]
    ) {
      result = currentElement + step;
    }
  });
  return result;
};

console.log("5.2 ", findMissing([1, 3, 5, 9, 11]));
console.log("5.2 ", findMissing([2, 10, 14]));
