const cards = document.querySelector('.cards');

let num = 1;
data.forEach((pokemon) => {
  const games = [];
  pokemon.game_indices.forEach((game) => {
    games.push(game.version.name);
  });

  const images = [
    pokemon.sprites.back_default,
    pokemon.sprites.front_default,
    pokemon.sprites.other['official-artwork'].front_default,
  ];

  const pokemonName =
    pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);
  const card = `
  <li class="card" onclick="changeImg('card--img${num}','${images[0]}','${images[1]}','${images[2]}')">
    <h2 class="card--title">${pokemonName}</h2>
    <img
    width="256"
    class="card--img card--img${num}"
    src=${pokemon.sprites.other['official-artwork'].front_default}
    />
    <ul class="card--text">
      <li>HP: ${pokemon.stats[0].base_stat}</li>
      <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
      <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
      <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
      <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
      <li>SPEED: ${pokemon.stats[5].base_stat}</li>
      <li class="wrap-words" style="max-width: 350px;">Games: ${games}</li>
    </ul>
  </li>
  `;
  num++;
  cards.innerHTML += card;
});

let i = 0;
const changeImg = (img, img1, img2, img3) => {
  const cardImg = document.querySelector(`.${img}`);
  if (i > 2) i = 0;
  const images = [img1, img2, img3];
  cardImg.src = images[i];
  i++;
};
