import './Player.scss';

const Player = () => {

    const name = "Fred"
    const geld = 2

    return (
        <div className="player">
            <div className="player_name">{name}</div>
            <div className="player_geld">Geld: <span>{geld}</span></div>
        </div>
    )
}
export default Player;