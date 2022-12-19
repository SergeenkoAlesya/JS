/* 4.	Приближается зима, вы должны подготовить свои лыжные каникулы. Ваша задача определить количество пар перчаток, которое вы можете составить из перчаток, которые есть в вашем ящике.

Дан массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, предполагая, что только перчатки одного цвета могут образовывать пары.

Fn(["red", "green", "red", "blue", "blue"] // 2 (1 пара красных, одна пара голубых) 
)

Fn(["red", "red", "red", "red", "red", "red"] // 3 (3 красных пары)
)
*/

const findCouple = (colors) => {
  const colorsObject = colors.reduce((result, currentElement) => {
    if (!result[currentElement]) {
      result[currentElement] = 0;
    }
    result[currentElement] += 1;
    return result;
  }, {});

  const couples = Object.entries(colorsObject).filter(([_, value]) => {
    return value >= 2;
  });

  countCouples = 0;
  couples.forEach(([_, value]) => {
    countCouples += Math.trunc(value / 2);
  });

  return countCouples;
};

console.log("5.4 ", findCouple(["red", "green", "red", "blue", "blue"]));
console.log("5.4 ", findCouple(["red", "red", "red", "red", "red", "red"]));
