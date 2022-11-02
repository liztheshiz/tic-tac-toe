import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.css';

import Home from '../home/Home';
import GameView from "../game-view/GameView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<GameView />} />
            </Routes>
        </Router>
    );
}

export default App;
