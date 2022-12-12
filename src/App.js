import './App.scss'

import Player from './Components/Player';
import Dreidel from './Components/Dreidel';
import Pot from './Components/Pot';
import Messages from './Components/Messages';
import Winner from './Components/Winner'

import { useState, useEffect, useRef } from 'react'

function App() {

  // const [players, setPlayers] = useState([
  //   {name: "Bob", geld: 2, playing: true}, {name: "Jana", geld: 2, playing: true}, {name: "Julie", geld: 2, playing: true}, {name: "Fred", geld: 2, playing: true}, {name: "Honza", geld: 2, playing: true}
  // ])
  const [players, setPlayers] = useState([
    {name: "Bob", geld: 2, playing: true}
  ])
  const [pot, setPot] = useState(5)
  const letters = ["נ", "ג", "ה", "ש", "A"] 
  const [letter, setLetter] = useState(4)
  const [spinning, setSpinning] = useState(false)
  const [turn, setTurn] = useState(0)
  const [message1, setMessage1] = useState("NONE")
  const [message2, setMessage2] = useState("NONE")
  const [message3, setMessage3] = useState(`It's now ${players[turn].name}'s turn.`)
  const [message4, setMessage4] = useState("NONE")
  const turnCount = useRef(0)
  const [winner, setWinner] = useState(null)
  const currentPlayers = () => {
    let i = 0
    players.forEach((player) => {
      if (player.playing === true) {
        i++
      } 
    })
    return i
  }

  // const changeTurn = (i) => {
  //   if (i < (currentPlayers.length - 1)) {
  //     i++
  //   } else {
  //     i = 0
  //   }
  //   return i
  // }

  const changeTurn = (i) => {
    do {
      if (i < (players.length - 1)) {
        i++
      } else {
        i = 0
      }
    } while (players[i].playing === false)
    return i
  }

  const spin = () => {
    turnCount.current = turnCount.current + 1
    setSpinning(true)
    setLetter(4)
    setMessage1("NONE")
    setMessage2("NONE")
    setMessage3("NONE")
    setMessage4("NONE")
    const choice = Math.floor(Math.random() * 4)
    const timer = setTimeout(() => {
      setLetter(choice)
      setSpinning(false)    
    }, 10)
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
        setMessage1(`${letters[letter]} - Gants! ${players[turn].name} gets the whole pot!.`)
        const updated = players.map((player, i) => {
          if (i === turn) {
            return {name: player.name, geld: (player.geld + pot), playing: player.playing}
          } else {
            return player
          }
        })
        setPlayers(updated)
        setPot(0)
      } else if (letter === 2) {
        // HE
        setMessage1(`${letters[letter]} - Halb! ${players[turn].name} gets half the pot!.`)
        const updated = players.map((player, i) => {
          if (i === turn) {
            return {name: player.name, geld: (player.geld + Math.ceil(pot/2)), playing: player.playing}
          } else {
            return player
          }
        })
        setPlayers(updated)
        setPot(Math.floor(pot/2))
      } else if (letter === 3) {
        // SHIN
        setMessage1(`${letters[letter]} - Shin! ${players[turn].name} puts one in!`)
        const updated = players.map((player, i) => {
          if (i === turn) {
            const newGeld = player.geld -1
            if (newGeld > 0) {
              return {name: player.name, geld: newGeld, playing: player.playing}
            } else {
              return {name: player.name, geld: 0, playing: false}
            }  
          } else {
            return player
          }
        })
        setPlayers(updated)
        setPot(pot + 1)
      } 
    }
  }, [letter])

  useEffect(() => {
    if (message2 === "NONE" && pot <= 1) {
      setMessage2(`The pot needs geld! Everyone put one in!`) 
      
      const updated = players.map((player) => {
        const newGeld = player.geld -1
        if (newGeld > 0) {
          return {name: player.name, geld: (player.geld -1), playing: player.playing}
        } else {
          return {name: player.name, geld: 0, playing: false}
        }
      })
      setPlayers(updated)
      setPot(pot + currentPlayers())
    }
  }, [pot])

  useEffect(() => {
    if (currentPlayers() === 1) {
      let win = null
      players.forEach((player) => {
        if (player.playing === true) {
          win = player
        }
      })
      setWinner(win)
    }
  }, [players])

  return (
    <div className="container">
      <div className="container_title">Dreidel</div>
      {winner && <Winner winner={winner} />}
      {!winner && <div className='container_playing'>
        <div className="container_playing_playarea">
          <Messages message1={message1} message2={message2} message3={message3} message4={message4}/>
          <Dreidel spinning={spinning} spin={spin} letter={letter} letters={letters} />
          <Pot data={pot} />
        </div>
        <div className="container_playing_players">
          {players && players.map((player, i) => {
            return <Player key={i} data={player} position={i} turn={turn} winner={winner}/>
          })}
        </div>
      </div>}
    </div>
  );
}

export default App;
