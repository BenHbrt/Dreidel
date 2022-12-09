import './App.scss'

import Player from './Components/Player';
import Dreidel from './Components/Dreidel';
import Pot from './Components/Pot';
import Messages from './Components/Messages';

import { useState, useEffect, useRef } from 'react'

function App() {

  const [players, setPlayers] = useState([
    {name: "Bob", geld: 10}, {name: "Jana", geld: 10}, {name: "Julie", geld: 10}, {name: "Fred", geld: 10}, {name: "Honza", geld: 10}
  ])
  const [pot, setPot] = useState(10)
  const letters = ["נ", "ג", "ה", "ש", "A"] 
  const [letter, setLetter] = useState(4)
  const [spinning, setSpinning] = useState(false)
  const [turn, setTurn] = useState(0)
  const [message1, setMessage1] = useState("NONE")
  const [message2, setMessage2] = useState("NONE")
  const [message3, setMessage3] = useState(`It's now ${players[turn].name}'s turn.`)
  const turnCount = useRef(0)

  const changeTurn = (i) => {
    if (i < (players.length - 1)) {
      i++
    } else {
      i = 0
    }
    return i
  }

  const spin = () => {
    turnCount.current = turnCount.current + 1
    setSpinning(true)
    setLetter(4)
    setMessage1("NONE")
    setMessage3("NONE")
    const choice = Math.floor(Math.random() * 4)
    const timer = setTimeout(() => {
      setLetter(choice)
      setSpinning(false)    
    }, 2000)
  }

  useEffect(() => {
    if (spinning === false && message3 === "NONE") {
      setTurn(changeTurn(turn))
    }
  }, [spinning])

  useEffect(() => {
      if (message3 === "NONE") {
        setMessage3(`It's now ${players[turn].name}'s turn.`) 
      }
  }, [turn])

  useEffect(() => {
    if (message1 === "NONE" && turnCount.current > 0) {
      if (letter === 0) {
        // NUN
        setMessage1(`${letters[letter]} - Nisht! ${players[turn].name} does nothing.`)
      } else if (letter === 1) {
        // GIMEL
        setMessage1(`${letters[letter]}: ${players[turn].name}`)
      } else if (letter === 2) {
        // HE
        setMessage1(`${letters[letter]}: ${players[turn].name}`)
      } else if (letter === 3) {
        // SHIN
        setMessage1(`${letters[letter]} - Shin! ${players[turn].name} puts one in!`)
        const updated = players.map((player, i) => {
          if (i === turn) {
            return {name: player.name, geld: (player.geld -1)}
          } else {
            return player
          }
        })
        setPlayers(updated)
        setPot(pot + 1)
      } 
    }
  }, [letter])

  return (
    <div className="container">
      <div className="container_title">Dreidel</div>
      <div className="container_playarea">
        <Messages message1={message1} message2={message2} message3={message3}/>
        <Dreidel spinning={spinning} spin={spin} letter={letter} letters={letters} />
        <Pot data={pot} />
      </div>
      <div className="container_players">
        {players && players.map((player, i) => {
          return <Player key={i} data={player} position={i} turn={turn} />
        })}
      </div>
    </div>
  );
}

export default App;
