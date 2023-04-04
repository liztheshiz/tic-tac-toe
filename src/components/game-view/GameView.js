import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './GameView.css';

class GameView extends React.Component {
    // CUSTOM METHODS

    // Fills square if it is empty and if it is player's turn, then runs winCheck
    handleClick(e) {
        const { winState, whoseTurn } = this.state;
        const { player, opponent } = this.props.location.state;
        this.aiTurn = this.aiTurn.bind(this);

        const square = e.target;

        if (!winState && whoseTurn == player && !square.innerText) {
            this.fillSquare(square, player);
            this.winCheck(square);
        }
    }

    // AI takes a turn, then runs winCheck
    // Fills one empty square RANDOMLY with AI team letter
    // TODO: Improve AI
    async aiTurn() {
        const { squares } = this.state;
        const { opponent } = this.props.location.state;

        const square = squares.item(Math.floor(Math.random() * (squares.length - 1)));

        this.fillSquare(square, opponent);
        this.winCheck(square);
    }

    // Fills given square with given letter, removing its 'empty' class
    fillSquare(square, letter) {
        square.classList.remove('empty');
        square.innerText = letter;
    }

    // Checks if last played square results in a win
    winCheck(square) {
        const { winState, whoseTurn, squares } = this.state;
        const { player, opponent } = this.props.location.state;
        this.handleEndgame = this.handleEndgame.bind(this);

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

        // Find diagonal squares (whether or not given square is in them; inclusion of given square check later)
        let diag1Squares = document.querySelectorAll('.square1, .square5, .square9');
        let diag2Squares = document.querySelectorAll('.square3, .square5, .square7');

        // Find given square number (converted to integer type)
        let squareNum;
        square.classList.forEach((i) => {
            if (i.includes('square') && i.length == 7) { squareNum = parseInt(i.substring(i.length - 1)) }
        });

        // Check row for win
        const rowSquares = document.querySelectorAll(`.${row}`);
        const rowWin = (rowSquares.item(0).innerText == rowSquares.item(1).innerText) && (rowSquares.item(1).innerText == rowSquares.item(2).innerText);

        // Check col for win
        const colSquares = document.querySelectorAll(`.${col}`);
        const colWin = (colSquares.item(0).innerText == colSquares.item(1).innerText) && (colSquares.item(1).innerText == colSquares.item(2).innerText);

        // Check for diagonal wins
        const squareOnDiag1 = squareNum == 1 || squareNum == 5 || squareNum == 9;
        const diag1Win = squareOnDiag1 && (diag1Squares.item(0).innerText == diag1Squares.item(1).innerText) && (diag1Squares.item(1).innerText == diag1Squares.item(2).innerText);

        const squareOnDiag2 = squareNum == 3 || squareNum == 5 || squareNum == 7;
        const diag2Win = squareOnDiag2 && (diag2Squares.item(0).innerText == diag2Squares.item(1).innerText) && (diag2Squares.item(1).innerText == diag2Squares.item(2).innerText);

        // Highlight winning squares and go to endgame if a win is present, or go to endgame if last square filled with no winner
        if (rowWin || colWin || diag1Win || diag2Win) {
            this.setState({
                winState: true
            }, () => {
                if (rowWin) rowSquares.forEach((i) => { i.classList.add('win-square') });
                if (colWin) colSquares.forEach((i) => { i.classList.add('win-square') });
                if (diag1Win) diag1Squares.forEach((i) => { i.classList.add('win-square') });
                if (diag2Win) diag2Squares.forEach((i) => { i.classList.add('win-square') });

                setTimeout(this.handleEndgame, 600, whoseTurn);
            });
        } else if (!winState && squares.length == 0) {
            setTimeout(this.handleEndgame, 600, false);
            // If no endgame, change turns, and run aiTurn if changing to opponent's turn
        } else {
            if (whoseTurn == player) {
                this.setState({ whoseTurn: opponent }, () => setTimeout(this.aiTurn, 700));
            } else if (whoseTurn == opponent) this.setState({ whoseTurn: player });
        }
    }

    // Engame logic
    handleEndgame(winner) {
        this.props.navigate('/gameover', { state: { winner: winner } });
    }


    // LIFECYCLE METHODS

    constructor(props) {
        super(props);
        this.state = {
            whoseTurn: 'X',
            winState: false,
            squares: document.getElementsByClassName('game-board__square empty') // All empty squares
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.aiTurn = this.aiTurn.bind(this);

        // X always goes first
        if (this.props.location.state.player == 'O' && this.state.squares.length == 9) {
            setTimeout(this.aiTurn, 2600);
        }
    }

    render() {
        const { whoseTurn } = this.state;
        const { player } = this.props.location.state;

        return (
            <Col xs={12} md={10} className="GameView text-center" data-testid="game-view">
                <Row className="home-button-row">
                    <Col xs={12}><Link className="home-button" to="/"><button className="home-button-button">&#8592; Home</button></Link></Col>
                </Row>
                <Row className="message-board">
                    <Col>
                        <Row className="justify-content-center message-board__teams">
                            <Col className="message-board__team" xs={12}>Your Letter: {player}</Col>
                        </Row>
                        <Row className="message-board__whose-turn mt-5">
                            <Col className="text-center">{whoseTurn}'s Turn</Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={6} className="justify-content-center text-center">
                        <div className="game-board justify-content-center" data-testid="game-board">
                            <div className="game-board__square row1 col1 square1 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row1 col2 square2 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row1 col3 square3 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row2 col1 square4 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row2 col2 square5 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row2 col3 square6 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row3 col1 square7 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row3 col2 square8 empty" onClick={this.handleClick}></div>
                            <div className="game-board__square row3 col3 square9 empty" onClick={this.handleClick}></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default GameView;