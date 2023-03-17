import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    return (
        <Col xs={5} xl={4} className="Home">
            <Row className="main-title justify-content-center text-left">
                <Col xs={12} md={12} lg={9} xl={9}>
                    <Row className="main-title__row"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>I</Col><Col className="letter" xs={4}>C</Col></Row>
                    <Row className="main-title__row"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>A</Col><Col className="letter" xs={4}>C</Col></Row>
                    <Row className="main-title__row"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>O</Col><Col className="letter" xs={4}>E</Col></Row>
                </Col>
            </Row >
            <Row className="buttons mt-5 justify-content-center">
                <Col xs={3} className="justify-content-center button-col text-center"><Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button">X</button></Link></Col>
                <Col xs={3} className="justify-content-center button-col text-center"><Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button">O</button></Link></Col>
            </Row>
        </Col >
    )
}