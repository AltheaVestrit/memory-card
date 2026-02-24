import '../css/Header.css';

function Header({ currentScore, bestScore }) {
    return (
        <div className="header">
            <h1>Pokemon Memory Game</h1>
            <p>Get points by clicking on an image, but don't click on any image more than once!</p>
            <div className="scores">
                    <p>Score: <span className="score">{currentScore}</span></p>
                    <p>Best Score: <span className="score">{bestScore}</span></p>
            </div>
        </div>
    );
};

export default Header;