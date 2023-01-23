const solution = async () => {
  try {
    const pokemonsShortInfo = await fetch(
      "https://pokeapi.co/api/v2/pokemon"
    ).then((response) => response.json());

    const urlPokemons = pokemonsShortInfo.results.map(
      (currentURL) => currentURL.url
    );

    // console.log(urlPokemons);
    const requests = urlPokemons.map((url) => fetch(url));

    // console.log(requests);

    const pokemonsInfo = await Promise.all(requests)
      .then((responses) => {
        //console.log(1);
        //console.log(responses);
        return responses;
      })
      .then((responses) => {
        //console.log(2);
        //console.log(responses);
        return Promise.all(responses.map((r) => r.json()));
      });

    console.log(pokemonsInfo);
  } catch (error) {}
};

solution();
