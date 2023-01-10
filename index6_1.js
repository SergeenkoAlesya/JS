const moveToZero = (date) => {
  let countZero = 0;
  const maxIndex = date.length;
  for (let index = 0; index + countZero < maxIndex; index++) {
    const element = date[index];
    //console.log(element, index, countZero);
    if (element === 0 || element === "0") {
      let index2 = index;
      for (index2; index2 < maxIndex - 1; index2++) {
        //console.log(date[index2], date[index2 + 1]);
        date[index2] = date[index2 + 1];
      }
      date[index2] = element;
      //console.log(date);
      //console.log(element);
      index--;
      countZero++;
    }
  }

  return date;
};

console.log(
  "6.1 ",
  moveToZero([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
);
