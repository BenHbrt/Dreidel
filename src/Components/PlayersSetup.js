import './PlayersSetup.scss';

import { useState, useEffect } from 'react'

const PlayersSetup = ({ setSettings, setPlayers, refreshPlayers, dreidelType, setDreidelType, startGeld, setStartGeld }) => {

    // const [startGeld, setStartGeld] = useState(10)
    const [newPlayers, setNewPlayers] = useState([])
    const [newName, setNewName] = useState("")
    const final = []

    useEffect(() => {
        if (refreshPlayers) {
            const array = []
            refreshPlayers.forEach((player) => {
                array.push(player.name)
            })
            setNewPlayers(array)
        }
    }, [])

    const geldChange = (dir) => {
        if (dir === "plus") {
            if (startGeld < 20) {
                setStartGeld(startGeld + 1)
            }
        } else if (dir === "minus") {
            if (startGeld > 5) {
                setStartGeld(startGeld - 1)
            }
        }
    }

    const inputName = (e) => {
        setNewName(e.target.value);
    }

    const addPlayer = () => {
        if (newPlayers.length < 6) {
            const updated = newPlayers.map((player) => {
                return player
            })
            updated.push(newName)
            setNewPlayers(updated)
            setNewName("")
        }
    }

    const startGame = () => {
        if (newPlayers.length > 1) {
            newPlayers.forEach(element => {
                final.push({
                    name: element,
                    geld: startGeld -1,
                    playing: true
                })
            });
            setPlayers(final)
            setSettings(false)
        }
    }

    const deleteItem = (index) => {
        const updated = []
        newPlayers.forEach((player, i) => {
            if (i != index) {
                updated.push(player)
            } 
        })
        setNewPlayers(updated)
    }

    return (
        <div className="playerssetup">
            <div className='playerssetup_style'>Dreidel Style:<span onClick={() => {setDreidelType(false)}} className={`playerssetup_style_optionD${dreidelType === false ? " active" : ""}`}>Diaspora</span><span onClick={() => {setDreidelType(true)}} className={`playerssetup_style_optionI${dreidelType === true ? " active" : ""}`}>Israeli</span></div>
            <div className='playerssetup_startgeld'>
                Starting Geld:
                <div className='playerssetup_startgeld_buttons'>
                <svg onClick={() => {geldChange("minus")}} className={`playerssetup_startgeld_buttons_button${startGeld <= 5 ? "-unactivated" : ""}`} xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M12 15.667 6.333 10 12 4.333l1.729 1.729L9.792 10l3.937 3.938Z"/></svg>
                <span>{startGeld}</span>
                <svg onClick={() => {geldChange("plus")}} className={`playerssetup_startgeld_buttons_button${startGeld >= 20 ? "-unactivated" : ""}`} xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m8 15.667-1.729-1.729L10.208 10 6.271 6.062 8 4.333 13.667 10Z"/></svg>
                </div>
            </div>
            <div className='playerssetup_players'>
            <div>Enter Players</div>
            <div className='playerssetup_players_input'>
            <input type="text" name="newPlayer" value={newName} onChange={inputName}></input><span className="playerssetup_addbutton" onClick={addPlayer}>+ Add Player</span>
            </div>
            {newPlayers.length > 0 && newPlayers.map((player, i) => {
                return <div className="playerssetup_player_item">{i + 1}: {player} <div onClick={() => deleteItem(i)}><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.75 16.583q-.542 0-.938-.395-.395-.396-.395-.938V5.5h-1V4.417H8v-.896h4v.896h3.583V5.5h-1v9.729q0 .583-.385.969-.386.385-.948.385ZM13.5 5.5h-7v9.75q0 .104.073.177t.177.073h6.5q.083 0 .167-.083.083-.084.083-.167ZM8.333 14h1.084V7H8.333Zm2.25 0h1.084V7h-1.084ZM6.5 5.5v10-.25Z"/></svg></div></div>
            })}
            <div className="playerssetup_startgame" onClick={startGame}><span>Start Game</span></div>
            </div>
        </div>
    )
}
export default PlayersSetup;

{/* <div className="playersSetup">
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
        </div> */}