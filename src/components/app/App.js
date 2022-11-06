import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

import Home from '../home/Home';
import GameView from "../game-view/GameView";
import GameOverView from "../game-over-view/GameOverView";

function App() {
    return (
        <Router>
            <Container>
                <Row className="justify-content-center firstrow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/play" element={<GameView />} />
                        <Route path="/gameover" element={<GameOverView />} />
                    </Routes>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
