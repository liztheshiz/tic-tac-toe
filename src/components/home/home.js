export default function Home() {
    return (
        <div className="App">
            <div className="main-title">
                <div>TIC.</div>
                <div>TAC.</div>
                <div>TOE.</div>
                <button className="start-button" data-testid="start-button">X</button>
                <button className="start-button" data-testid="start-button">O</button>
            </div>
        </div>
    )
}