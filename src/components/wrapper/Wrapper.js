import GameView from "../game-view/GameView";

import { useLocation, useNavigate } from 'react-router-dom';

export default function Wrapper() {
    // Import player choice from Link in Home
    const location = useLocation();
    const navigate = useNavigate();

    return (<GameView location={location} navigate={navigate}></GameView>)
}