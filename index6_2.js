const sortArray = (date) => {
  const arrayOdd = date
    .filter((element) => element % 2 !== 0)
    .sort((a, b) => a - b);
  console.log(arrayOdd);

  let countOdd = 0;
  for (let index = 0; index < date.length; index++) {
    const element = date[index];
    //console.log(element, index, countOdd);
    if (element % 2 !== 0) {
      date.splice(index, 1, arrayOdd[countOdd]);
      //console.log(date);
      countOdd++;
    }
  }

  return date;
};

console.log("6.2 ", sortArray([7, 1]));
console.log("6.2 ", sortArray([5, 8, 6, 3, 4]));
console.log("6.2 ", sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log("6.2 ", sortArray([1, 11, 2, 8, 3, 4, 5]));
