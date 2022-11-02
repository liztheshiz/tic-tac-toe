import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <div className="App">
                        <div className="main-title">
                            <div>TIC.</div>
                            <div>TAC.</div>
                            <div>TOE.</div>
                            <button className="start-button" data-testid="start-button">X</button>
                            <button className="start-button" data-testid="start-button">O</button>
                        </div>
                    </div>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
