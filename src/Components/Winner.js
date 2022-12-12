import './Winner.scss'

const Winner = ({ winner }) => {
    return (
        <div className="winner">
            <div className="winner_title"><span><strong>{winner.name}</strong></span> is the winner!</div>
            <div className="winner_playagain"><span>Play Again</span></div>
        </div>
    )
}
export default Winner;