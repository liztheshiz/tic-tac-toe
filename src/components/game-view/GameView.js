import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import './GameView.css';

export default function GameView() {
    // Import player choice from Link in Home
    const location = useLocation();
    const navigate = useNavigate();

    const square1 = document.querySelector('.square1');
    const square2 = document.querySelector('.square2');
    const square3 = document.querySelector('.square3');
    const square4 = document.querySelector('.square4');
    const square5 = document.querySelector('.square5');
    const square6 = document.querySelector('.square6');
    const square7 = document.querySelector('.square7');
    const square8 = document.querySelector('.square8');
    const square9 = document.querySelector('.square9');

    const { player, opponent } = location.state;

    const [whoseTurn, setWhoseTurn] = useState('X');

    // Fills square if it is empty, then lets AI take a turn
    const handleClick = (e) => {
        const square = e.target;

        if (whoseTurn == player && !square.innerText) {
            fillSquare(square, player);
            winCheck(square);
            setWhoseTurn(opponent);

            // Wait before AI takes its turn
            setTimeout(aiTurn, 600);
        }
    }

    // Engame logic
    const handleEndgame = () => {
        alert('game over!');
        navigate('/gameover');
    }

    const winCheck = (square) => {
        let row;
        square.classList.forEach((i) => {
            if (i.includes('row')) { row = i }
        });
        console.log(`row: ${row}`);
        let col;
        square.classList.forEach((i) => {
            if (i.includes('col')) { col = i }
        });
        console.log(`col: ${col}`);
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

        setWhoseTurn(player);
    }

    useEffect(() => {
        // X always goes first
        if (player == 'O') {
            aiTurn();
        }
    }, []);

    return (
        <div className="GameView" data-testid="game-view">
            <div className="message-board">
                Your Team: {player}
                Opponent's Team: {opponent}
                <div className="message-board__whose-turn">{whoseTurn}'s Turn</div>
            </div>
            <div className="game-board" data-testid="game-board">
                <div className="game-board__square row1 col1 square1 empty" onClick={handleClick}></div>
                <div className="game-board__square row1 col2 square2 empty" onClick={handleClick}></div>
                <div className="game-board__square row1 col3 square3 empty" onClick={handleClick}></div>
                <div className="game-board__square row2 col1 square4 empty" onClick={handleClick}></div>
                <div className="game-board__square row2 col2 square5 empty" onClick={handleClick}></div>
                <div className="game-board__square row2 col3 square6 empty" onClick={handleClick}></div>
                <div className="game-board__square row3 col1 square7 empty" onClick={handleClick}></div>
                <div className="game-board__square row3 col2 square8 empty" onClick={handleClick}></div>
                <div className="game-board__square row3 col3 square9 empty" onClick={handleClick}></div>
            </div>
        </div>
    )
}