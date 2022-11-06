import { Link, useLocation } from 'react-router-dom';

import './GameOverView.css';

export default function GameView() {
    const location = useLocation();
    const { winner } = location.state;

    return (
        <div>
            {winner ? <div>{winner} WINS</div> : <div>GAME OVER</div>}
            <div>Play again?</div>
            <Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button" data-testid="start-button">X</button></Link>
            <Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button" data-testid="start-button">O</button></Link>
        </div>
    )
}