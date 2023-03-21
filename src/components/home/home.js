import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    const buttonHover = (letter) => {
        let rectangleLeftWrapper = document.querySelector(`.rectangle-left-wrapper-${letter}`);
        let rectangleRightWrapper = document.querySelector(`.rectangle-right-wrapper-${letter}`);

        rectangleRightWrapper.classList.add("rotate", "delay", "ease-out");

        rectangleLeftWrapper.classList.remove("delay");
        rectangleLeftWrapper.classList.add("rotate", "disappear", "ease-in");
    }

    const buttonUnHover = (letter) => {
        let rectangleLeftWrapper = document.querySelector(`.rectangle-left-wrapper-${letter}`);
        let rectangleRightWrapper = document.querySelector(`.rectangle-right-wrapper-${letter}`);

        rectangleRightWrapper.classList.remove("rotate", "delay", "ease-out");

        rectangleLeftWrapper.classList.add("delay");
        rectangleLeftWrapper.classList.remove("rotate", "disappear", "ease-in");
    }

    return (
        <Col xs={5} xl={4} className="Home">
            <Row className="main-title justify-content-center text-left">
                <Col xs={12} md={12} lg={9} xl={9}>
                    <Row className="main-title__row main-title__row__1"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>I</Col><Col className="letter" xs={4}>C</Col></Row>
                    <Row className="main-title__row main-title__row__2"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>A</Col><Col className="letter" xs={4}>C</Col></Row>
                    <Row className="main-title__row main-title__row__3"><Col className="letter" xs={4}>T</Col><Col className="letter" xs={4}>O</Col><Col className="letter" xs={4}>E</Col></Row>
                </Col>
            </Row >
            <Row className="buttons mt-5 justify-content-center">
                <Col xs={3} className="justify-content-center button-col text-center">
                    <div className="button-container" onMouseEnter={() => buttonHover('x')} onMouseLeave={() => buttonUnHover('x')}>
                        <div className="circle-container">
                            <div className="circle">
                                <div className="circle-left"></div>
                                <div className="circle-right"></div>
                            </div>
                            <div className="rectangle-left-wrapper rectangle-left-wrapper-x ease-out">
                                <div className="rectangle-left"></div>
                            </div>
                            <div className="rectangle-right-wrapper rectangle-right-wrapper-x ease-in">
                                <div className="rectangle-right"></div>
                            </div>
                        </div>
                        <Link className="link" to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button">X</button></Link>
                    </div>
                </Col>
                <Col xs={3} className="justify-content-center button-col text-center">
                    <div className="button-container" onMouseEnter={() => buttonHover('o')} onMouseLeave={() => buttonUnHover('o')}>
                        <div className="circle-container">
                            <div className="circle">
                                <div className="circle-left"></div>
                                <div className="circle-right"></div>
                            </div>
                            <div className="rectangle-left-wrapper rectangle-left-wrapper-o ease-out">
                                <div className="rectangle-left"></div>
                            </div>
                            <div className="rectangle-right-wrapper rectangle-right-wrapper-o ease-in">
                                <div className="rectangle-right"></div>
                            </div>
                        </div>
                        <Link className="link" to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button">O</button></Link>
                    </div>
                </Col>
            </Row>
        </Col >
    )
}

/*

*/