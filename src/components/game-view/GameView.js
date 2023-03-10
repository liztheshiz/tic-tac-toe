import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './GameView.css';

class GameView extends React.Component {
    // CUSTOM METHODS
    // Fills square if it is empty, then lets AI take a turn
    handleClick(e) {
        const { winState, whoseTurn } = this.state;
        const { player, opponent } = this.props.location.state;
        this.aiTurn = this.aiTurn.bind(this);

        console.log('PLAYER CLICKED');
        const square = e.target;

        if (!winState && whoseTurn == player && !square.innerText) {
            this.fillSquare(square, player);
            if (!winState) {
                //setWhoseTurn(opponent);
                this.setState({
                    whoseTurn: opponent
                });

                // Wait before AI takes its turn
                console.log(`about to set timeout for aiTurn after click`);
                setTimeout(this.aiTurn, 700);
            }
        }
    }

    // Engame logic
    handleEndgame(winner) {
        //alert('game over!');
        this.props.navigate('/gameover', { state: { winner: winner } });
    }

    // Checks if last played square results in a win
    winCheck(square) {
        const { winState, whoseTurn, squares } = this.state;

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
            //setWinState(true);
            this.setState({
                winState: true
            });
            console.log(`winState after setting it: ${winState.toString()}`);
            if (rowWin) rowSquares.forEach((i) => { i.classList.add('win-square') });
            if (colWin) colSquares.forEach((i) => { i.classList.add('win-square') });
            if (diag1Win) diag1Squares.forEach((i) => { i.classList.add('win-square') });
            if (diag2Win) diag2Squares.forEach((i) => { i.classList.add('win-square') });

            console.log('win endgame about to run');
            console.log(`winState: ${winState}`);
            return setTimeout(this.handleEndgame, 600, whoseTurn);
        } else if (!winState && squares.length == 0) {
            console.log('non win endgame about to run');
            console.log(`winState: ${winState}`);
            return setTimeout(this.handleEndgame, 600, false);
        }
        console.log('winCheck run, no endgame');
    }

    // Fills given square with given letter, removing its 'empty' class
    fillSquare(square, letter) {
        square.classList.remove('empty');
        square.innerText = letter;
        console.log('about to run winCheck');
        this.winCheck(square);
    }

    // AI takes a turn
    // Fills one empty square randomly with AI team letter
    // Also triggers endgame
    aiTurn() {
        console.log(`state in aiTurn: ${this.state.winState}`);
        const { winState, squares } = this.state;
        const { player, opponent } = this.props.location.state;

        console.log('AI MOVING');
        const num = Math.floor(Math.random() * (squares.length - 1));

        this.fillSquare(squares.item(num), opponent);

        console.log(`finished filling square w no endgame, changing turn to ${player}`);
        console.log(`winState: ${winState}`);
        if (!winState) this.setState({ whoseTurn: player });//setWhoseTurn(player);
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
        // X always goes first
        if (this.props.player == 'O' && this.state.squares.length == 9) {
            setTimeout(this.aiTurn, 900);
        }
    }

    render() {
        //const { location } = this.props;
        const { whoseTurn, winState } = this.state;

        const { player, opponent } = this.props.location.state;

        return (
            <Col xs={8} className="GameView text-center" data-testid="game-view">
                <Row className="message-board">
                    <Col>
                        <Row className="justify-content-center message-board__teams">
                            <Col xs={5}>Your Team: {player}</Col><Col xs={5}>Opponent's Team: {opponent} Win State: {winState.toString()}</Col>
                        </Row>
                        <Row className="message-board__whose-turn mt-3">
                            <Col className="text-center">{whoseTurn}'s Turn</Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
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