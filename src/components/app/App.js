import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './App.css';

import Home from '../home/Home';
import GameView from "../game-view/GameView";
import GameOverView from "../game-over-view/GameOverView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<GameView />} />
                <Route path="/gameover" element={<GameOverView />} />
            </Routes>
        </Router>
    );
}

export default App;
