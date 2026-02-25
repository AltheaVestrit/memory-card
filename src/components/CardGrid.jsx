import Card from "./Card";
import { useState, useEffect } from "react";
import { getPokemonData } from "../services/api";
import '../css/CardGrid.css';

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