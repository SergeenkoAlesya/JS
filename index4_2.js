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
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/imagin/2891/Fracture425.jpg",
  },
];

const findMaxSquaret = (boxarts) => {
  const arraySquares = boxarts.map(({ width, height, ...otherList }) => {
    return {
      square: width * height,
      ...otherList,
    };
  });

  return arraySquares.reduce((result, currentElement) => {
    return result.square >= currentElement.square
      ? result.url
      : currentElement.url;
  });
};

console.log("4.2 ", findMaxSquaret(boxarts));
