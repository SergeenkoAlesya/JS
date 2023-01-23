/*HW

1.	Ваша задача реализовать функцию-банкомат

Дан массив купюр со следующим номиналом banknotes = [1, 5, 10, 20, 50, 100, 500];
Количество банкнот не ограничено
Функция принимает число (сумму, которую хочет списать пользователь) возвращает массив банкнот с наибольшим номиналом


ATM(1000) // [500, 500]
ATM(1025) // [500, 500, 20, 5],
ATM(10) // 10
*/
const banknotes = [1, 5, 10, 20, 50, 100, 500];
const ATM = (money) => {
  let currentMoney = money;
  const result = [];
  banknotes.sort((a, b) => b - a);
  let i = 0;
  while (currentMoney > 0) {
    if (currentMoney >= banknotes[i]) {
      result.push(banknotes[i]);
      currentMoney = currentMoney - banknotes[i];
    } else {
      i++;
    }
  }

  console.log(result);
  return result;
};

ATM(1000);
ATM(1025);
ATM(10);
