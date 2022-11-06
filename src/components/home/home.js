import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    return (
        <Col xs={4} className="Home">
            <Row className="main-title justify-content-center">
                <Col xs={7}>
                    <Row className="main-title__row"><Col className="tic">TIC</Col></Row>
                    <Row className="main-title__row"><Col className="tac">TAC</Col></Row>
                    <Row className="main-title__row"><Col className="toe">TOE</Col></Row>
                </Col>
            </Row >
            <Row className="buttons justify-content-center">
                <Col xs={3} className="justify-content-center button-col"><Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button">X</button></Link></Col>
                <Col xs={3} className="justify-content-center button-col"><Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button">O</button></Link></Col>
            </Row>
        </Col >
    )
}