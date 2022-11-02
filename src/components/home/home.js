import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            <div className="main-title" data-testid="main-title">
                <div>TIC.</div>
                <div>TAC.</div>
                <div>TOE.</div>
                <Link to="/game" state={{ team: "X" }}><button className="start-button" data-testid="start-button">X</button></Link>
                <Link to="/game" state={{ team: "O" }}><button className="start-button" data-testid="start-button">O</button></Link>
            </div>
        </div>
    )
}