import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

import Home from '../home/Home';
import Wrapper from "../wrapper/Wrapper";
import GameOverView from "../game-over-view/GameOverView";

const AnimatedSwitch = () => {
    const location = useLocation();
    console.log("location", location);

    const [transitionName, setTransitionName] = useState("next");

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.pathname}
                classNames={transitionName}
                timeout={2000}
            >
                <div className="fixed-position">
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/play" element={<Wrapper />} />
                        <Route path="/gameover" element={<GameOverView />} />
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

function App() {
    return (
        <Router className="text-center">
            <Container className="App">
                <Row className="justify-content-center">
                    <AnimatedSwitch />
                </Row>
            </Container>
        </Router>
    );
}

export default App;
