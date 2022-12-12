/* с помощью map, raduce вывести url у которого большая площадь
 */

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture150.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture425.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture300.jpg",
  },
];

const findMaxSquaret = (boxarts) => {
  const maxSquare = boxarts.reduce(
    (maxSquareArray, currentElement) => {
      const currentElementSquare = currentElement.width * currentElement.height;
      if (currentElementSquare >= maxSquareArray.square) {
        maxSquareArray.square = currentElementSquare;
        maxSquareArray.url = currentElement.url;
      }
      return maxSquareArray;
    },
    { square: 0, url: "" }
  );
  return maxSquare.url;
};

console.log("4.2 ", findMaxSquaret(boxarts));
