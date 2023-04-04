import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    const xButtonHover = () => {
        let rectangleLeftWrapper = document.querySelector(`.rectangle-left-wrapper-x`);
        let rectangleRightWrapper = document.querySelector(`.rectangle-right-wrapper-x`);

        rectangleRightWrapper.classList.add("rotate", "delay", "ease-out");

        rectangleLeftWrapper.classList.remove("delay");
        rectangleLeftWrapper.classList.add("rotate", "disappear", "ease-in");
    }

    const xButtonUnHover = () => {
        let rectangleLeftWrapper = document.querySelector(`.rectangle-left-wrapper-x`);
        let rectangleRightWrapper = document.querySelector(`.rectangle-right-wrapper-x`);

        rectangleRightWrapper.classList.remove("rotate", "delay", "ease-out");

        rectangleLeftWrapper.classList.add("delay");
        rectangleLeftWrapper.classList.remove("rotate", "disappear", "ease-in");
    }

    const oButtonHover = () => {
        let rectangleLeft = document.querySelector(`.rectangle-left-o`);
        let rectangleRight = document.querySelector(`.rectangle-right-o`);

        rectangleRight.classList.remove("small-delay");
        rectangleRight.classList.add("translate");

        rectangleLeft.classList.add("translate", "small-delay");
    }

    const oButtonUnHover = () => {
        let rectangleLeft = document.querySelector(`.rectangle-left-o`);
        let rectangleRight = document.querySelector(`.rectangle-right-o`);

        rectangleLeft.classList.remove("translate", "small-delay");

        rectangleRight.classList.add("small-delay");
        rectangleRight.classList.remove("translate");
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
                    <div className="button-container" onMouseEnter={xButtonHover} onMouseLeave={xButtonUnHover}>
                        <div className="circle-container">
                            <div className="circle">
                                <div className="circle-left"></div>
                                <div className="circle-right"></div>
                            </div>
                            <div className="rectangle-left-wrapper rectangle-left-wrapper-x">
                                <div className="rectangle-left"></div>
                            </div>
                            <div className="rectangle-right-wrapper rectangle-right-wrapper-x">
                                <div className="rectangle-right"></div>
                            </div>
                        </div>
                        <Link className="link" to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button">X</button></Link>
                    </div>
                </Col>
                <Col xs={3} className="justify-content-center button-col text-center">
                    <div className="button-container" onMouseEnter={oButtonHover} onMouseLeave={oButtonUnHover}>
                        <div className="ex-container">
                            <div className="ex">
                                <div className="ex-left"></div>
                                <div className="ex-right"></div>
                            </div>
                            <div className="rectangle-left-o"></div>
                            <div className="rectangle-right-o"></div>
                        </div>
                        <Link className="link" to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button">O</button></Link>
                    </div>
                </Col>
            </Row >
        </Col >
    )
}

/*

*/