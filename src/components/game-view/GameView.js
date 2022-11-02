import { useLocation } from 'react-router-dom';

export default function GameView() {
    // Import team choice from Link in Home
    const location = useLocation();
    const { team } = location.state;

    return (
        <div className="GameView" data-testid="game-view">
            GameView rendered!
            Team: {team}
            <div className="game-board" data-testid="game-board"></div>
        </div>
    )
}