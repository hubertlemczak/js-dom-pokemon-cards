const cards = document.querySelector('.cards');

let i = 0;
const changeImg = (img, img1, img2, img3) => {
  const cardImg = document.querySelector(`.${img}`);
  if (i > 2) i = 0;
  const images = [img1, img2, img3];
  cardImg.src = images[i];
  i++;
};

let num = 1;
const createCard = (pokemon) => {
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

  const card = document.createElement('li');
  card.classList.add('card');
  card.setAttribute(
    'onclick',
    `changeImg('card--img${num}', '${images[0]}', '${images[1]}', '${images[2]}')`
  );
  cards.append(card);

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card--title');
  cardTitle.innerText = pokemonName;
  card.append(cardTitle);

  const img = document.createElement('img');
  img.setAttribute('class', `card--img card--img${num}`);
  img.setAttribute('width', 256);
  img.setAttribute(
    'src',
    `${pokemon.sprites.other['official-artwork'].front_default}`
  );
  card.append(img);

  const cardText = document.createElement('ul');
  cardText.classList.add('card--text');
  card.append(cardText);

  const li1 = document.createElement('li');
  li1.innerText = `HP: ${pokemon.stats[0].base_stat}`;
  cardText.append(li1);

  const li2 = document.createElement('li');
  li2.innerText = `ATTACK: ${pokemon.stats[1].base_stat}`;
  cardText.append(li2);

  const li3 = document.createElement('li');
  li3.innerText = `DEFENSE: ${pokemon.stats[2].base_stat}`;
  cardText.append(li3);

  const li4 = document.createElement('li');
  li4.innerText = `SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}`;
  cardText.append(li4);

  const li5 = document.createElement('li');
  li5.innerText = `SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}`;
  cardText.append(li5);

  const li6 = document.createElement('li');
  li6.innerText = `SPEED: ${pokemon.stats[5].base_stat}`;
  cardText.append(li6);

  const li7 = document.createElement('li');
  li7.innerText = `Games: ${games}`;
  cardText.append(li7);

  num++;
};

data.forEach((pokemon) => {
  createCard(pokemon);
  // const card = `
  // <li class="card" onclick="changeImg('card--img${num}','${images[0]}','${images[1]}','${images[2]}')">
  //   <h2 class="card--title">${pokemonName}</h2>
  //   <img
  //   width="256"
  //   class="card--img card--img${num}"
  //   src=${pokemon.sprites.other['official-artwork'].front_default}
  //   />
  //   <ul class="card--text">
  //     <li>HP: ${pokemon.stats[0].base_stat}</li>
  //     <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
  //     <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
  //     <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
  //     <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
  //     <li>SPEED: ${pokemon.stats[5].base_stat}</li>
  //     <li class="wrap-words" style="max-width: 350px;">Games: ${games}</li>
  //   </ul>
  // </li>
  // `;
  // num++;
  // cards.innerHTML += card;
});
