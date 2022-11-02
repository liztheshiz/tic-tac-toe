import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="main-title">
                <div>TIC.</div>
                <div>TAC.</div>
                <div>TOE.</div>
                <button className="start-button" data-testid="start-button" onClick={handleStart}>X</button>
                <button className="start-button" data-testid="start-button" onClick={handleStart}>O</button>
            </div>
        </div>
    );
}

export default App;
