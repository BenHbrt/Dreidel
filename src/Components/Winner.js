import './Winner.scss'

import Player from "./Player"

const Winner = ({ winner }) => {
    return (
        <div className="winner">
            <div className="winner_title">{winner.name} is the winner!</div>
            <div className="winner_score">
            <Player data={winner} position={1} turn={2} winner={false} />
            </div>
            <div className="winner_playagain"><span>Play Again</span></div>
        </div>
    )
}
export default Winner;