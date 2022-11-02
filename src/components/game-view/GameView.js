import { useLocation } from 'react-router-dom';

import { useEffect } from 'react';

import './GameView.css';

export default function GameView() {
    // Import team choice from Link in Home
    const location = useLocation();
    const { team } = location.state;

    const handleClick = (e) => {
        const square = e.target;
        if (!square.innerText) square.innerText = `${team}`;
    }

    const aiTurn = () => {
        console.log('ai turn!');
    }

    useEffect(() => {
        // X always goes first
        if (team == 'O') {
            aiTurn();
        }
    });

    return (
        <div className="GameView" data-testid="game-view">
            <div className="message-board">
                Your Team: {team}
                <div className="message-board__whose-turn">X's Turn</div>
            </div>
            <div className="game-board" data-testid="game-board">
                <div className="game-board__square square1" onClick={handleClick}></div>
                <div className="game-board__square square2" onClick={handleClick}></div>
                <div className="game-board__square square3" onClick={handleClick}></div>
                <div className="game-board__square square4" onClick={handleClick}></div>
                <div className="game-board__square square5" onClick={handleClick}>X</div>
                <div className="game-board__square square6" onClick={handleClick}></div>
                <div className="game-board__square square7" onClick={handleClick}></div>
                <div className="game-board__square square8" onClick={handleClick}></div>
                <div className="game-board__square square9" onClick={handleClick}></div>
            </div>
        </div>
    )
}