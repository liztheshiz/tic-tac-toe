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
import Wrapper from "../wrapper/Wrapper";
import GameOverView from "../game-over-view/GameOverView";

function App() {
    return (
        <Router className="text-center">
            <Container className="App">
                <Row className="justify-content-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/play" element={<Wrapper />} />
                        <Route path="/gameover" element={<GameOverView />} />
                    </Routes>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
