import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import './GameView.css';

export default function GameView() {
    // Import player choice from Link in Home
    const location = useLocation();
    const navigate = useNavigate();

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

    // Checks if last played square results in a win
    const winCheck = (square) => {
        // Find row of given square
        let row;
        square.classList.forEach((i) => {
            if (i.includes('row')) { row = i }
        });

        // Find col of given square
        let col;
        square.classList.forEach((i) => {
            if (i.includes('col')) { col = i }
        });

        let squareNum;
        square.classList.forEach((i) => {
            if (i.includes('square') && i.length == 7) { squareNum = parseInt(i.substring(i.length - 1)) }
        });

        const rowSquares = document.querySelectorAll(`.${row}`);
        const rowWin = (rowSquares.item(0).innerText == rowSquares.item(1).innerText) && (rowSquares.item(1).innerText == rowSquares.item(2).innerText);
        console.log(`rowWin: ${rowWin}`);

        const colSquares = document.querySelectorAll(`.${col}`);
        const colWin = (colSquares.item(0).innerText == colSquares.item(1).innerText) && (colSquares.item(1).innerText == colSquares.item(2).innerText);
        console.log(`colWin: ${colWin}`);

        // Checks if given square is in a corner or the center, then checks diagonal(s)
        let diagWin1 = false;
        let diagWin2 = false;
        // If squareNum is odd, square is on diagonal
        if (squareNum % 2 == 1) {
            diagWin1 = document.querySelector('.square1').innerText && (document.querySelector('.square1').innerText == document.querySelector('.square5').innerText) && (document.querySelector('.square5').innerText == document.querySelector('.square9').innerText);
            diagWin2 = document.querySelector('.square3').innerText && (document.querySelector('.square3').innerText == document.querySelector('.square5').innerText) && (document.querySelector('.square5').innerText == document.querySelector('.square7').innerText);
            console.log(`diag1Win: ${diagWin1}`);
            console.log(`diag2Win: ${diagWin2}`);
        }

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