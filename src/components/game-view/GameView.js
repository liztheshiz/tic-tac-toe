import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import './GameView.css';

export default function GameView() {
    // Import team choice from Link in Home
    const location = useLocation();
    const navigate = useNavigate();
    const { team, opponent } = location.state;

    // Fills square if it is empty, then lets AI take a turn
    const handleClick = (e) => {
        const square = e.target;
        if (!square.innerText) {
            fillSquare(square, team);
            const whoseTurn = document.querySelector('.message-board__whose-turn');
            whoseTurn.innerText = `${opponent}'s Turn`;

            // Wait before AI takes its turn
            setTimeout(aiTurn, 600);
        }
    }

    // Engame logic
    const handleEndgame = () => {
        alert('game over!');
        navigate('/gameover');
    }

    // Fills given square with given letter, removing its 'empty' class
    const fillSquare = (square, letter) => {
        square.classList.remove('empty');
        square.innerText = letter;
    }

    // AI takes a turn
    // Finds all empty squares and returns random one for AI to fill with their team letter
    // Also triggers endgame
    const aiTurn = () => {
        const squares = document.getElementsByClassName('game-board__square empty');

        // Endgame logic
        if (squares.length == 0) {
            handleEndgame();
        }

        const num = Math.floor(Math.random() * (squares.length - 1));

        fillSquare(squares.item(num), opponent);

        // Endgame logic
        if (squares.length == 0) {
            handleEndgame();
        }
        const whoseTurn = document.querySelector('.message-board__whose-turn');
        whoseTurn.innerText = `${team}'s Turn`;
    }

    useEffect(() => {
        // X always goes first
        if (team == 'O') {
            aiTurn();
        }
    }, []);

    return (
        <div className="GameView" data-testid="game-view">
            <div className="message-board">
                Your Team: {team}
                Opponent's Team: {opponent}
                <div className="message-board__whose-turn">X's Turn</div>
            </div>
            <div className="game-board" data-testid="game-board">
                <div className="game-board__square square1 empty" onClick={handleClick}></div>
                <div className="game-board__square square2 empty" onClick={handleClick}></div>
                <div className="game-board__square square3 empty" onClick={handleClick}></div>
                <div className="game-board__square square4 empty" onClick={handleClick}></div>
                <div className="game-board__square square5 empty" onClick={handleClick}></div>
                <div className="game-board__square square6 empty" onClick={handleClick}></div>
                <div className="game-board__square square7 empty" onClick={handleClick}></div>
                <div className="game-board__square square8 empty" onClick={handleClick}></div>
                <div className="game-board__square square9 empty" onClick={handleClick}></div>
            </div>
        </div>
    )
}