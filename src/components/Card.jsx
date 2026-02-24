import '../css/Card.css';
import emptyImg from '../images/empty.png';

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function Card({ card, onclick }) {
    return (
        <div className="card" onClick={onclick}>
            <img src={card.spriteUrl} alt={`${card.id} - ${card.name}`} />
            {/* <img src={emptyImg} alt={`${card.id} - ${capitalize(card.name)}`} /> */}
            <h2>{capitalize(card.name)}</h2>
        </div>
    );
};

export default Card;