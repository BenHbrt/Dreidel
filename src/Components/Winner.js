import './Winner.scss'

const Winner = ({ winner, func }) => {
    return (
        <div className="winner">
            <div className="winner_title"><span><strong>{winner.name}</strong></span> is the winner!</div>
            <div className="winner_playagain" onClick={func}><span>Play Again</span></div>
        </div>
    )
}
export default Winner;