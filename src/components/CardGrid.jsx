import Card from "./card";
import { useState, useEffect } from "react";
import '../css/CardGrid.css';

const cardsArray = [
    {
      id: 48,
      name: 'venonat',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png'
    },
    {
      id: 23,
      name: 'ekans',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    },
    {
      id: 460,
      name: 'abomasnow',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png'
    },
    {
      id: 758,
      name: 'salazzle',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png'
    },
    {
      id: 62,
      name: 'poliwrath',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
    },
    {
      id: 385,
      name: 'jirachi',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png'
    },
    {
      id: 423,
      name: 'gastrodon',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png'
    },
    {
      id: 614,
      name: 'beartic',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png'
    },
    {
      id: 295,
      name: 'exploud',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png'
    },
    {
      id: 611,
      name: 'fraxure',
      spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png'
    }
  ]

function CardGrid() {
  const [cards, setCards] = useState(cardsArray);

  function shuffleCards() {
    setCards((cards) => {
      let shuffled = cards.slice(0); // make a copy of the array
      // Durstenfeld shuffle algorithm
      for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }
      return shuffled;
    });
  };

  return (
      <div className="card-grid">
          {cards.map((card) => (
              <Card card={card} key={card.id} onclick={shuffleCards}/>
          ))}
      </div>
  );
};

export default CardGrid;