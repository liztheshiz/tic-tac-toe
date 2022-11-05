import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            <div className="main-title" data-testid="main-title">
                <div>TIC.</div>
                <div>TAC.</div>
                <div>TOE.</div>
                <Link to="/play" state={{ player: "X", opponent: "O" }}><button className="start-button" data-testid="start-button">X</button></Link>
                <Link to="/play" state={{ player: "O", opponent: "X" }}><button className="start-button" data-testid="start-button">O</button></Link>
            </div>
        </div>
    )
}