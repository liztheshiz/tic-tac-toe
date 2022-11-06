import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    return (
        <Col xs={4} className="Home">
            <Row className="main-title" data-testid="main-title">
                <Col>
                    <Row><Col>TIC.</Col></Row>
                    <Row><Col>TAC.</Col></Row>
                    <Row><Col>TOE.</Col></Row>
                </Col>
            </Row>
            <Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button" data-testid="start-button">X</button></Link>
            <Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button" data-testid="start-button">O</button></Link>
        </Col>
    )
}