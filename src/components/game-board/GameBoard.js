import Col from 'react-bootstrap/Col';

import './GameBoard.css';

export default function GameBoard(props) {

    return (
        <Col xs={6} className="justify-content-center text-center">
            <div className="game-board justify-content-center" data-testid="game-board">
                <div className="game-board__square row1 col1 square1 empty" onClick={props.handleClick}>{props.squaresContent[0]}</div>
                <div className="game-board__square row1 col2 square2 empty" onClick={props.handleClick}>{props.squaresContent[1]}</div>
                <div className="game-board__square row1 col3 square3 empty" onClick={props.handleClick}>{props.squaresContent[2]}</div>
                <div className="game-board__square row2 col1 square4 empty" onClick={props.handleClick}>{props.squaresContent[3]}</div>
                <div className="game-board__square row2 col2 square5 empty" onClick={props.handleClick}>{props.squaresContent[4]}</div>
                <div className="game-board__square row2 col3 square6 empty" onClick={props.handleClick}>{props.squaresContent[5]}</div>
                <div className="game-board__square row3 col1 square7 empty" onClick={props.handleClick}>{props.squaresContent[6]}</div>
                <div className="game-board__square row3 col2 square8 empty" onClick={props.handleClick}>{props.squaresContent[7]}</div>
                <div className="game-board__square row3 col3 square9 empty" onClick={props.handleClick}>{props.squaresContent[8]}</div>
            </div>
        </Col>
    )
}