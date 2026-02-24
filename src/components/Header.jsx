import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <h1>Header</h1>
            <p>Get points by clicking on an image, but don't click on any image more than once!</p>
            <div className="scores">
                    <p>Score: <span className="score">0</span></p>
                    <p>Best Score: <span className="score">11</span></p>
            </div>
        </div>
    );
};

export default Header;