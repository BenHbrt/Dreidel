import './PlayersSetup.scss';

import { useRef } from 'react'

const PlayersSetup = ({ setSettings, setPlayers }) => {

    const startGeld = useRef(10)
    const newPlayers = useRef([])
    const final = []

    const geldChange = (e) => {
        startGeld.current = e.target.value;
    }

    const inputName = (e) => {
        newPlayers.current[e.target.name - 1] = e.target.value;
    }

    const startGame = () => {
        newPlayers.current = newPlayers.current.flat()
        newPlayers.current.forEach(element => {
            final.push({
                name: element,
                geld: startGeld.current -1,
                playing: true
            })
        });
        setPlayers(final)
        setSettings(false)
    }

    return (
        <div className="playersSetup">
            <h2>Setup</h2>
            <label>Player 1:</label>
            <input type="text" name={1} onChange={inputName}></input><br/>
            <label>Player 2:</label>
            <input type="text" name={2} onChange={inputName}></input><br/>
            <label>Player 3:</label>
            <input type="text" name={3} onChange={inputName}></input><br/>
            <label>Player 4:</label>
            <input type="text" name={4} onChange={inputName}></input><br/>
            <label>Player 5:</label>
            <input type="text" name={5} onChange={inputName}></input><br/>
            <label>Player 6:</label>
            <input type="text" name={6} onChange={inputName}></input><br/>
            <label>Starting Geld:</label>
            <input type="number" min="10" max="20" placeholder="10" onChange={geldChange}></input>
            <button onClick={startGame}>Start Game</button>
        </div>
    )
}
export default PlayersSetup;