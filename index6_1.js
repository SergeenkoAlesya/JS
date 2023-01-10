const moveToZero = (date) => {
  let countZero = 0;
  const maxIndex = date.length;
  for (let index = 0; index + countZero < maxIndex; index++) {
    const element = date[index];
    //console.log(element, index, countZero);
    if (element === 0 || element === "0") {
      date.push(date[index]);

      date.splice(index, 1);
      //console.log(date);
      index--;
      countZero++;
    }
  }

  return date;
};

console.log(moveToZero([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
