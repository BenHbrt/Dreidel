import './Player.scss';

const Player = ({ data, position, turn, winner }) => {

    return (
        <div className={`player${position === turn && !winner ? " turn" : ""}${data.playing === false ? " outofgame" : ""}`}>
        <div className="player_name">{data.name}</div>
        <div className="player_geld">Geld: <span>{data.geld}</span></div>
        </div> 
    )
}
export default Player;