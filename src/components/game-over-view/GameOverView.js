import { Link, useLocation } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './GameOverView.css';

export default function GameOverView() {
    const location = useLocation();
    const { winner } = location.state;

    return (
        <Col className="GameOverView">
            {winner ? <Row className="justify-content-center gameover-message">{winner} WINS</Row> : <Row className="justify-content-center gameover-message">GAME OVER</Row>}
            <Row className="mt-4 justify-content-center play-again">Play again?</Row>
            <Row className="mt-5 justify-content-center">
                <Col xs={1} className="justify-content-center button-col text-center"><Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button" data-testid="start-button">X</button></Link></Col>
                <Col xs={1} className="justify-content-center button-col text-center"><Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button" data-testid="start-button">O</button></Link></Col>
            </Row>
        </Col>
    )
}