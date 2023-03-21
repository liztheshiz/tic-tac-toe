import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';

export default function Home() {
    const buttonHover = () => {
        let rectangleLeftWrapper = document.querySelector(".rectangle-left-wrapper");
        let rectangleRightWrapper = document.querySelector(".rectangle-right-wrapper");
        rectangleLeftWrapper.classList.add("rotate");
        rectangleRightWrapper.classList.add("rotate", "disappear");
    }

    const buttonUnHover = () => {
        let rectangleLeftWrapper = document.querySelector(".rectangle-left-wrapper");
        let rectangleRightWrapper = document.querySelector(".rectangle-right-wrapper");
        rectangleLeftWrapper.classList.remove("rotate");
        rectangleRightWrapper.classList.remove("rotate", "disappear");
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
                    <div className="button-container" onMouseEnter={buttonHover} onMouseLeave={buttonUnHover}>
                        <div className="circle-container">
                            <div className="circle">
                                <div className="circle-left"></div>
                                <div className="circle-right"></div>
                            </div>
                            <div className="rectangle-left-wrapper">
                                <div className="rectangle-left"></div>
                            </div>
                            <div className="rectangle-right-wrapper">
                                <div className="rectangle-right"></div>
                            </div>
                        </div>
                        <Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button">X</button></Link>
                    </div>
                </Col>
                <Col xs={3} className="justify-content-center button-col text-center"><Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button">O</button></Link></Col>
            </Row>
        </Col >
    )
}

/*

*/