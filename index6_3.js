const createFakeRequest = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const loadDate = async (request, delay) => {
  try {
    const rejection = new Promise((_, reject) => {
      setTimeout(() => {
        reject(Error("Error, too low"));
      }, delay);
    });
    const responsePromise = await Promise.race([request, rejection]).then(
      (result) => console.log(result)
    );
  } catch (error) {
    console.log(error.message);
  }
};

const request = createFakeRequest("ответ от сервера", 10000);
loadDate(request, 3000);
