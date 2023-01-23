const moveToZero = (date) => {
  let count = 0;
  console.log(date);
  for (let i = 0; i < date.length; i++) {
    if (date[i] !== 0 && date[i] !== "0") {
      date[count++] = date[i];
    }
  }

  console.log(date);
  for (let i = count; i < date.length; i++) {
    date[i] = date[count];
    console.log(date[count]);
  }

  return date;
};

console.log(
  "6.1 ",
  moveToZero([7, 2, 3, "0", 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
);
