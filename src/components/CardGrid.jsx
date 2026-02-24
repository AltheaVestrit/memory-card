import Card from "./Card";
import { useState, useEffect } from "react";
import { getPokemonData } from "../services/api";
import '../css/CardGrid.css';

const cardsArray = [
  {
    id: 488,
    name: 'cresselia',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png'
  },
  {
    id: 793,
    name: 'nihilego',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png'
  },
  {
    id: 88,
    name: 'grimer',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png'
  },
  {
    id: 660,
    name: 'diggersby',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png'
  },
  {
    id: 988,
    name: 'slither-wing',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png'
  },
  {
    id: 472,
    name: 'gliscor',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png'
  },
  {
    id: 415,
    name: 'combee',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png'
  },
  {
    id: 970,
    name: 'glimmora',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png'
  },
  {
    id: 173,
    name: 'cleffa',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png'
  },
  {
    id: 440,
    name: 'happiny',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png'
  },
  {
    id: 282,
    name: 'gardevoir',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png'
  },
  {
    id: 62,
    name: 'poliwrath',
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png'
  }
];

function CardGrid({ currentScore, bestScore, setCurrentScore, setBestScore }) {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const pokemon = await getPokemonData();
        setCards(pokemon);
      } catch(err) {
        console.log(err);
      }
    }

    loadPokemonData();
  },[]);

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

  function cardClick(id) {
    if (!clicked.includes(id)) {
      setClicked([...clicked, id]);
      setCurrentScore(currentScore + 1);
    } else {
      setClicked([]);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      alert("Game over!");
    }
    shuffleCards();
  };

  return (
      <div className="card-grid">
          {cards.map((card) => (
              <Card card={card} key={card.id} onclick={() => cardClick(card.id)}/>
          ))}
      </div>
  );
};

export default CardGrid;